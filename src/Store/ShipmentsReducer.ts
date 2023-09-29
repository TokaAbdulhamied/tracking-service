import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

interface ShipmentsState {
  data: any[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: ShipmentsState = {
  data: [],
  status: "idle",
  error: null,
}

export const getShipmentsData = createAsyncThunk(
  "shipments/getShipmentsData",
  async (trackingId: string) => {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackingId}`
    )
    return response.data
  }
)

const shipmentsSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getShipmentsData.pending, (state: ShipmentsState) => {
        state.status = "loading"
      })
      .addCase(
        getShipmentsData.fulfilled,
        (state: ShipmentsState, action: PayloadAction<any[]>) => {
          state.status = "succeeded"
          state.data = action.payload
        }
      )
      .addCase(
        getShipmentsData.rejected,
        (state: ShipmentsState, action: any) => {
          state.status = "failed"
          state.error = action?.error.message
        }
      )
  },
})

export default shipmentsSlice.reducer
