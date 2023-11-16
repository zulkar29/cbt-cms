import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { IToken, IUser } from '../../interfaces/user';

// Get user from localStorage
const userString = localStorage.getItem('user');
const user = userString ? JSON.parse(userString) : null;

interface IInitialState {
  user: IToken | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: IInitialState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (user: IUser, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().authService.user.refreshToken;
    console.log('token');
    return await authService.logout(token);
  } catch (error) {
    return thunkAPI.rejectWithValue('Logout failed');
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.user = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
