import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getShipmentsData } from "./ShipmentsMiddleware"
import { Update } from "utils"
export type Data = {
  PromisedDate?: Date
  TransitEvents: Update[]
  CurrentStatus: Record<string, string>
  step: { count: number; stepperState: string; state: string }
  address: string
  merchantName: string
}
interface ShipmentsState {
  data: Data
  trackingId?: string
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: ShipmentsState = {
  data: {
    PromisedDate: undefined,
    TransitEvents: [],
    CurrentStatus: {},
    step: { count: 0, stepperState: "", state: "" },
    address: "",
    merchantName: "",
  },
  status: "idle",
  error: null,
  trackingId: undefined,
}

const shipmentsSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    clear: (state) => {
      return initialState
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(
        getShipmentsData.pending,
        (
          state: ShipmentsState,
          action: PayloadAction<string> & { meta: { arg: string } }
        ) => {
          state.status = "loading"
          state.trackingId = action.meta.arg
        }
      )
      .addCase(
        getShipmentsData.fulfilled,
        (state: ShipmentsState, action: PayloadAction<Data>) => {
          state.status = "succeeded"
          state.data = action?.payload
        }
      )
      .addCase(getShipmentsData.rejected, (state: ShipmentsState) => {
        state.status = "failed"
        state.error = "error :'D "
      })
  },
})
export const { clear } = shipmentsSlice.actions
export default shipmentsSlice.reducer
