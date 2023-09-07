import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService, { ICreateResponse } from './blogService';
import { BlogData } from '../../interfaces/blog';
import { RootState } from '../store';

interface IBlogResponse {
  blogs: BlogData[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
}

const initialState: IBlogResponse = {
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new Blog
export const createBlog = createAsyncThunk(
  'blogs/create',
  async (blogData: FormData, thunkAPI) => {
    try {
      return await blogService.createNewBlog(blogData);
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
      .addCase(createBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = (action.payload as ICreateResponse).message;
      });
  },
});

export const { reset } = blogSlice.actions;
export const selectCount = (state: RootState) => state.blogs;
export default blogSlice.reducer;
