import { configureStore } from "@reduxjs/toolkit"
import shipments from "./ShipmentsReducer"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const store = configureStore({
  reducer: {
    shipments,
  },
})

export default store
