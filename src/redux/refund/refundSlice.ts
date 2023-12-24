import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import refundService from './refundService';
import { IRefund } from '../../interfaces/refund';

interface IBlogResponse {
  refunds: IRefund[];
  totalCount: number;
  isError: boolean;
  isSuccess: boolean;
  isCreate: boolean;
  isUpdate: boolean;
  isDelete: boolean;
  isLoading: boolean;
  message: string | unknown;
  errorMessage: string | unknown;
}

const initialState: IBlogResponse = {
  refunds: [],
  totalCount: 0,
  isError: false,
  isSuccess: false,
  isCreate: false,
  isUpdate: false,
  isDelete: false,
  isLoading: false,
  message: '',
  errorMessage: '',
};

export const getRefund = createAsyncThunk(
  'refunds/getAll',
  async (
    filter: {
      [key: string]: string | number;
    },
    thunkAPI
  ) => {
    try {
      return await refundService.getRefund(filter);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateRefund = createAsyncThunk(
  'refunds/update',
  async (data: Partial<IRefund>, thunkAPI) => {
    try {
      return await refundService.updateRefund(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteRefund = createAsyncThunk(
  'refunds/delete',
  async (videoId: number | string, thunkAPI) => {
    try {
      return await refundService.deleteRefund(videoId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const refundSlice = createSlice({
  name: 'refund',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      /* TODO: GET FAQ DATA SET */
      .addCase(getRefund.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRefund.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.refunds = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getRefund.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE FAQ DATA SET */
      .addCase(updateRefund.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateRefund.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateRefund.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE FAQ DATA SET */
      .addCase(deleteRefund.pending, (state) => {
        state.isDelete = false;
      })
      .addCase(deleteRefund.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteRefund.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = refundSlice.actions;
export const selectCount = (state: RootState) => state.faqs;
export default refundSlice.reducer;
