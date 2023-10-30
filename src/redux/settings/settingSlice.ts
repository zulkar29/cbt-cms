import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPages } from '../../interfaces/pages';
import { ISettings } from '../../interfaces/settings';

interface IPagesResponse {
  setting: ISettings;
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

const initialState: IPagesResponse = {
  setting: {},
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
export const createPages = createAsyncThunk(
  'pages/create',
  async (faqData: IPages, thunkAPI) => {
    try {
      return await pageService.createPages(faqData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPages = createAsyncThunk(
  'pages/getAll',
  async (_, thunkAPI) => {
    try {
      return await pageService.getPages();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateFaq = createAsyncThunk(
  'pages/update',
  async (faqData: Partial<IFaq>, thunkAPI) => {
    try {
      return await pageService.updatePages(faqData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteFaq = createAsyncThunk(
  'pages/delete',
  async (videoId: number | string, thunkAPI) => {
    try {
      return await pageService.deletePages(videoId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const pageSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      /* TODO: GET FAQ DATA SET */
      .addCase(getPages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pages = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getPages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE FAQ DATA SET */
      .addCase(updateFaq.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateFaq.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = pageSlice.actions;
export const selectCount = (state: RootState) => state.pages;
export default pageSlice.reducer;
