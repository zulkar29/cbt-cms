import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './product-service';
import { IProduct } from '../../interfaces/product';

interface IState {
  products: IProduct[];
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
const initialState: IState = {
  products: [],
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

// Get user products
export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (data: FormData, thunkAPI) => {
    try {
      return await productService.createProduct(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Get user products
export const getProducts = createAsyncThunk(
  'product/getAllProducts',
  async ({ page, limit }: { [key: string]: number }, thunkAPI) => {
    try {
      return await productService.getAllProducts({ page, limit });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  'category/update',
  async (
    { id, productData }: { id: number; productData: FormData },
    thunkAPI
  ) => {
    try {
      return await productService.updateProduct(id, productData);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (ProductId: number, thunkAPI) => {
    try {
      return await productService.deleteProduct(ProductId);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
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
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.isCreate = false;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isCreate = true;
      })
      .addCase(createProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.data.rows;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      /* TODO: UPDATE PRODUCT DATA SET */
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.isUpdate = false;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isUpdate = true;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: DELETE CATEGORY DATA SET */
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isDelete = false;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.isLoading = false;
        state.isDelete = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
