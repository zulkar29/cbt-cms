import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IVideo, IVideoResponse } from '../../interfaces/video';
import videoService from './videoService';
import { RootState } from '../store';

interface IBlogResponse {
  videos: IVideo[];
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
  videos: [],
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
export const createVideo = createAsyncThunk(
  'videos/create',
  async (videoData: IVideo, thunkAPI) => {
    try {
      return await videoService.createNewVideo(videoData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getVideos = createAsyncThunk(
  'videos/getAll',
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    try {
      return await videoService.getVideos({ page, limit, token });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateVideo = createAsyncThunk(
  'videos/update',
  async (videoData: Partial<IVideo>, thunkAPI) => {
    try {
      return await videoService.updateVideo(videoData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteVideo = createAsyncThunk(
  'videos/delete',
  async (videoId: number | string, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.refreshToken;
      return await videoService.deleteVideo(videoId, token);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const videoSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createVideo.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreate = true;
        state.message = (action.payload as Partial<IVideoResponse>).message;
      })
      .addCase(createVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = (action.payload as IVideoResponse).message;
      })
      /* TODO: GET FAQ DATA SET */
      .addCase(getVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = action.payload.data.rows;
        state.totalCount = action.payload.data.count;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: UPDATE FAQ DATA SET */
      .addCase(updateVideo.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateVideo.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE FAQ DATA SET */
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

export const { reset } = videoSlice.actions;
export const selectCount = (state: RootState) => state.videos;
export default videoSlice.reducer;
