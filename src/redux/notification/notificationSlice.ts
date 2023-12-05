import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import faqService from './notificationService';
import {
  INotification,
  INotificationResponse,
} from '../../interfaces/notification';

interface IBlogResponse {
  notifications: INotification[];
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
  notifications: [],
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
export const createNotification = createAsyncThunk(
  'notification/create',
  async (data: INotification, thunkAPI) => {
    try {
      return await faqService.createNotification(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getNotification = createAsyncThunk(
  'notification/getAll',
  async (_, thunkAPI) => {
    try {
      return await faqService.getNotification();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const faqSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNotification.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreate = true;
        state.message = (
          action.payload as Partial<INotificationResponse>
        ).message;
      })
      .addCase(createNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as INotificationResponse).message;
      })
      /* TODO: GET FAQ DATA SET */
      .addCase(getNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notifications = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = faqSlice.actions;
export const selectCount = (state: RootState) => state.faqs;
export default faqSlice.reducer;
