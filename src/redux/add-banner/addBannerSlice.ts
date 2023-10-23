import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import addBannerService from './addBannerService';
import { IAdBanner, IAddBannerResponse } from '../../interfaces/addBanner';

interface IBlogResponse {
  addBanner: IAdBanner[];
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
  addBanner: [],
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
export const createAddBanner = createAsyncThunk(
  'addBanner/create',
  async (bannerData: FormData, thunkAPI) => {
    try {
      return await addBannerService.createAddBanner(bannerData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAddBanner = createAsyncThunk(
  'addBanner/getAll',
  async (_, thunkAPI) => {
    try {
      return await addBannerService.getAddBanner();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateAddBanner = createAsyncThunk(
  'addBanner/update',
  async (bannerData: Partial<IAdBanner>, thunkAPI) => {
    try {
      return await addBannerService.updateAddBanner(bannerData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteFaq = createAsyncThunk(
  'addBanner/delete',
  async (videoId: number | string, thunkAPI) => {
    try {
      return await addBannerService.deleteFaq(videoId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addBannerSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAddBanner.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createAddBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreate = true;
        state.message = (action.payload as Partial<IAddBannerResponse>).message;
      })
      .addCase(createAddBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as IAddBannerResponse).message;
      })
      /* TODO: GET FAQ DATA SET */
      .addCase(getAddBanner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addBanner = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getAddBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE FAQ DATA SET */
      .addCase(updateAddBanner.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateAddBanner.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateAddBanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE FAQ DATA SET */
      .addCase(deleteFaq.pending, (state) => {
        state.isDelete = false;
      })
      .addCase(deleteFaq.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = addBannerSlice.actions;
export const selectCount = (state: RootState) => state.banner;
export default addBannerSlice.reducer;
