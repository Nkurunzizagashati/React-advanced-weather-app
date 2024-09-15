import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const weatherSlice  = createSlice({
  name: "weather",
  initialState: {
    isLoading: false,
    all: null,
    updated: null,
    selected: null
  },
  reducers: {
    setAll(state, action){
      state.all = action.payload
    },
    setUpdated(state,action){
      state.updated = action.payload
    },
    setSelected(state,action){
      state.selected = action.payload
    },
    setIsLoading(state, action){
      state.isLoading = action.payload
    }
  }
}
)

export const weatherActions = weatherSlice.actions
export default weatherSlice.reducer
