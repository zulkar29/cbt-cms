import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import faqService, { ICreateResponse } from './faqService';
import { BlogData } from '../../interfaces/blog';
import { RootState } from '../store';

interface IBlogResponse {
  faqs: BlogData[];
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
export const createBlog = createAsyncThunk(
  'faqs/create',
  async (blogData: FormData, thunkAPI) => {
    try {
      return await faqService.createNewBlog(blogData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFaqs = createAsyncThunk(
  'blogs/getAll',
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

export const updateBlog = createAsyncThunk(
  'blogs/update',
  async (blogData: Partial<BlogData>, thunkAPI) => {
    try {
      return await faqService.updateBlog(blogData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteBlog = createAsyncThunk(
  'blogs/delete',
  async (blogId: number | string, thunkAPI) => {
    try {
      return await faqService.deleteBlog(blogId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = (action.payload as ICreateResponse).message;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as ICreateResponse).message;
      })
      /* TODO: GET BLOG DATA SET */
      .addCase(getFaqs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getFaqs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE BLOG DATA SET */
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE BLOG DATA SET */
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export const selectCount = (state: RootState) => state.blogs;
export default blogSlice.reducer;
