import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ISubscribe, ISubscribeResponse } from '../../interfaces/subscribe';
import subscribeService from './subscribeService';

interface IBlogResponse {
  subscribers: ISubscribe[];
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
  subscribers: [],
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

// Create new Blog
export const createFaq = createAsyncThunk(
  'subscribers/create',
  async (subscribeData: ISubscribe, thunkAPI) => {
    try {
      return await subscribeService.createSubscribe(subscribeData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSubscribers = createAsyncThunk(
  'subscribers/getAll',
  async (
    filter: {
      [key: string]: string | number;
    },
    thunkAPI
  ) => {
    try {
      return await subscribeService.getSubscribes(filter);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteSubscriber = createAsyncThunk(
  'subscribers/delete',
  async (subsId: number, thunkAPI) => {
    try {
      return await subscribeService.deleteSubscribe(subsId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const subscriberSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFaq.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createFaq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreate = true;
        state.message = (action.payload as Partial<ISubscribeResponse>).message;
      })
      .addCase(createFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as ISubscribeResponse).message;
      })
      /* TODO: GET FAQ DATA SET */
      .addCase(getSubscribers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subscribers = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      /* TODO: DELETE FAQ DATA SET */
      .addCase(deleteSubscriber.pending, (state) => {
        state.isDelete = false;
      })
      .addCase(deleteSubscriber.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteSubscriber.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = subscriberSlice.actions;
export const selectCount = (state: RootState) => state.subscribers;
export default subscriberSlice.reducer;
