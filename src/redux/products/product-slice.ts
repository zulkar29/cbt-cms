import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './product-service';
import { IProduct } from '../../interfaces/product';
import axios from 'axios';

interface IState {
  products: IProduct[];
  totalCount: number;
  isError: boolean;
  isSuccess: boolean;
  isCreate: boolean;
  isUpdate: boolean;
  isDelete: boolean;
  isCsvUpload: boolean;
  isLoading: boolean;
  csvFile: string;
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
  isCsvUpload: false,
  isDelete: false,
  isLoading: false,
  csvFile: '',
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
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
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
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const updateProduct = createAsyncThunk(
  'category/update',
  async (
    {
      id,
      productData,
    }: {
      id: number;
      productData: FormData | { [key: string]: string | number | boolean };
    },
    thunkAPI
  ) => {
    try {
      return await productService.updateProduct(id, productData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);
// Delete Product
export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (ProductId: number, thunkAPI) => {
    try {
      return await productService.deleteProduct(ProductId);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);
// Download csv
export const csvProduct = createAsyncThunk(
  'product/csv_download',
  async (_, thunkAPI) => {
    try {
      return await productService.csvProduct();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

// Upload csv
export const uploadCsvProduct = createAsyncThunk(
  'product/csv_upload',
  async (csvData: FormData, thunkAPI) => {
    try {
      return await productService.uploadCsvProduct(csvData);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || 'An error occurred';
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred');
      }
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.isCreate = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isCsvUpload = false;
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
      })
      /* TODO: CSV DOWNLOAD */
      .addCase(csvProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(csvProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.csvFile = action.payload;
      })
      .addCase(csvProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      /* TODO: CSV UPLOAD */
      .addCase(uploadCsvProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadCsvProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCsvUpload = true;
        state.csvFile = action.payload;
      })
      .addCase(uploadCsvProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isCsvUpload = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
