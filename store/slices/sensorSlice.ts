import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"

export interface SensorData {
  id: string
  value: number
  unit: string
  timestamp: string
  status: "normal" | "warning" | "critical"
  location: {
    name: string
    coordinates: {
      lat: number
      lng: number
    }
  }
}

interface SensorState {
  data: SensorData[]
  isLoading: boolean
  error: string | null
  selectedDeviceId: string | null
}

const initialState: SensorState = {
  data: [],
  isLoading: false,
  error: null,
  selectedDeviceId: null,
}

export const fetchSensorData = createAsyncThunk("sensors/fetchSensorData", async (_, { rejectWithValue }) => {
  try {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockData: SensorData[] = Array.from({ length: 5 }, (_, i) => ({
      id: `sensor-${i + 1}`,
      value: Math.floor(Math.random() * 100),
      unit: "%",
      timestamp: new Date().toISOString(),
      status: ["normal", "warning", "critical"][Math.floor(Math.random() * 3)] as SensorData["status"],
      location: {
        name: ["North Field", "South Field", "East Field", "West Field"][Math.floor(Math.random() * 4)],
        coordinates: {
          lat: 34.052235 + Math.random() * 0.01,
          lng: -118.243683 + Math.random() * 0.01,
        },
      },
    }))

    return mockData
  } catch (error) {
    return rejectWithValue("Failed to fetch sensor data")
  }
})

const sensorSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    setSelectedDevice: (state, action: PayloadAction<string | null>) => {
      state.selectedDeviceId = action.payload
    },
    updateSensorData: (state, action: PayloadAction<SensorData[]>) => {
      state.data = action.payload
    },
    clearSensorData: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSensorData.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSensorData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchSensorData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { setSelectedDevice, updateSensorData, clearSensorData } = sensorSlice.actions

export default sensorSlice.reducer
