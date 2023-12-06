import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import queryService from './queryService';
import { IQuery } from '../../interfaces/query';

interface IState {
  queries: IQuery[];
  totalCount: number;
  isError: boolean;
  isSuccess: boolean;
  isDelete: boolean;
  isLoading: boolean;
  message: string | unknown;
  errorMessage: string | unknown;
}
const initialState: IState = {
  queries: [],
  totalCount: 0,
  isError: false,
  isSuccess: false,
  isDelete: false,
  isLoading: false,
  message: '',
  errorMessage: '',
};

// Get Emi's
export const getQueries = createAsyncThunk(
  'query/getquery',
  async ({ page, limit }: { [key: string]: number }, thunkAPI) => {
    try {
      return await queryService.getQueries({ page, limit });
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

export const deleteQueries = createAsyncThunk(
  'query/delete',
  async (ProductId: number, thunkAPI) => {
    try {
      return await queryService.deleteQueries(ProductId);
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

export const querySlice = createSlice({
  name: 'query',
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
      .addCase(getQueries.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getQueries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.queries = action.payload.data.rows;
      })
      .addCase(getQueries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })

      /* TODO: DELETE CATEGORY DATA SET */
      .addCase(deleteQueries.pending, (state) => {
        state.isLoading = true;
        state.isDelete = false;
      })
      .addCase(deleteQueries.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteQueries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = querySlice.actions;
export default querySlice.reducer;
