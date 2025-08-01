import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

interface Rating {
  rate: number
  count: number
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface ProductsState {
  items: Product[]
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | null
}

const initialState: ProductsState = {
  items: [],
  loading: "idle",
  error: null,
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products")
  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }
  const data: Product[] = await response.json()
  return data
})

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending"
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = "succeeded"
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  },
})

export default productSlice.reducer
