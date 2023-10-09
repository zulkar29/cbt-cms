import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IFaq, IFaqResponse } from '../../interfaces/faq';
import { RootState } from '../store';
import faqService from './faqService';

interface IBlogResponse {
  faqs: IFaq[];
  totalCount: number;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
  errorMessage: string | unknown;
}

const initialState: IBlogResponse = {
  faqs: [],
  totalCount: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  errorMessage: '',
};

// Create new Blog
export const createVideo = createAsyncThunk(
  'faqs/create',
  async (faqData: IFaq, thunkAPI) => {
    try {
      return await faqService.createFaq(faqData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFaqs = createAsyncThunk(
  'faqs/getAll',
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    try {
      return await faqService.getFaqs({ page, limit });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateVideo = createAsyncThunk(
  'faqs/update',
  async (faqData: Partial<IFaq>, thunkAPI) => {
    try {
      return await faqService.updateFaq(faqData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteVideo = createAsyncThunk(
  'faqs/delete',
  async (videoId: number | string, thunkAPI) => {
    try {
      return await faqService.deleteFaq(videoId);
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
      .addCase(createVideo.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = (action.payload as Partial<IFaqResponse>).message;
      })
      .addCase(createVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as IFaqResponse).message;
      })
      /* TODO: GET FAQ DATA SET */
      .addCase(getFaqs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.faqs = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getFaqs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE FAQ DATA SET */
      .addCase(updateVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateVideo.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE FAQ DATA SET */
      .addCase(deleteVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVideo.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = faqSlice.actions;
export const selectCount = (state: RootState) => state.faqs;
export default faqSlice.reducer;
