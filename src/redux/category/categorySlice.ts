import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import categoryService from './categoryService';
import { ICategory } from '../../interfaces/category';

interface IBlogResponse {
  categories: ICategory[];
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
  categories: [],
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
export const createCategory = createAsyncThunk(
  'category/create',
  async (categoryData: ICategory, thunkAPI) => {
    try {
      return await categoryService.createCategory(categoryData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCategories = createAsyncThunk(
  'category/getAll',
  async (_, thunkAPI) => {
    try {
      return await categoryService.getCategory();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  'category/update',
  async (categoryData: Partial<ICategory>, thunkAPI) => {
    try {
      return await categoryService.updateCategory(categoryData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteVideo = createAsyncThunk(
  'category/delete',
  async (categoryId: number, thunkAPI) => {
    try {
      return await categoryService.deleteCategory(categoryId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const categorySlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.isLoading = false;
        state.isCreate = true;
      })
      .addCase(createCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        // state.errorMessage = action.payload.message;
      })
      /* TODO: GET CATEGORY DATA SET */
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.categories = action.payload.data.rows;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE CATEGORY DATA SET */
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateCategory.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE CATEGORY DATA SET */
      .addCase(deleteVideo.pending, (state) => {
        state.isLoading = true;
        state.isDelete = false;
      })
      .addCase(deleteVideo.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = categorySlice.actions;
export const selectCount = (state: RootState) => state.category;
export default categorySlice.reducer;
