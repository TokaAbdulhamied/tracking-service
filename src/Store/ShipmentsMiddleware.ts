import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Data } from "./ShipmentsReducer"
import { mapEventToStepp } from "utils"

export const getShipmentsData = createAsyncThunk(
  "shipments/getShipmentsData",

  async (trackingId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://tracking.bosta.co/shipments/track/${trackingId}`
      )
      let data: Data = {
        PromisedDate: response.data.PromisedDate,
        TransitEvents: response.data.TransitEvents,
        CurrentStatus: response.data.CurrentStatus,
        address: "الشيخ زايد, الحي الاول, المجاورة التاسعة",
        merchantName: "Amazon.com",
        step: { count: 0, stepperState: "", state: "" },
      }
      let lastEvent: number = data?.TransitEvents?.length - 1
      let step = mapEventToStepp(data.TransitEvents[lastEvent])
      if (step.count === -1 && step.state === "CANCELLED") {
        let laststep = mapEventToStepp(data.TransitEvents[lastEvent - 1])
        step = { ...step, count: laststep.count, stepperState: "error" }
      }
      data.step = step
      console.log(step, "step")
      console.log(data)
      return data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
