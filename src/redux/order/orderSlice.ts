import { IOrder } from './../../interfaces/order';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';
import axios from 'axios';

interface IState {
  orders: IOrder[];
  totalCount: number;
  isError: boolean;
  isSuccess: boolean;
  isDelete: boolean;
  isLoading: boolean;
  message: string | unknown;
  errorMessage: string | unknown;
}
const initialState: IState = {
  orders: [],
  totalCount: 0,
  isError: false,
  isSuccess: false,
  isDelete: false,
  isLoading: false,
  message: '',
  errorMessage: '',
};

// Get Order
export const getOrders = createAsyncThunk(
  'product/getAllProducts',
  async (filter: { [key: string]: number }, thunkAPI) => {
    try {
      return await orderService.getAllOrders(filter);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);
// Delete Order
export const deleteOrder = createAsyncThunk(
  'product/delete',
  async (ProductId: number, thunkAPI) => {
    try {
      return await orderService.deleteOrder(ProductId);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload.data.rows;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })

      /* TODO: DELETE CATEGORY DATA SET */
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
        state.isDelete = false;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
