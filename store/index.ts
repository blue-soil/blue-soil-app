import { configureStore } from "@reduxjs/toolkit"
import authReducer from "store/slices/authSlice"
import sensorReducer from "store/slices/sensorSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sensors: sensorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
