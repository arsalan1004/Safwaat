import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  heading: "Makhraj Articulation",
  audioUrl: ""
}

const modelSlideSlice = createSlice({
  name: "modelSlideSlice",
  initialState: initialState,
  reducers: {
    setModelData(state, action) {
      state.heading = action.payload.heading,
      state.audioUrl = action.payload.audioUrl
    }
  }
})

export default modelSlideSlice.reducer;
export const modelSlideActions = modelSlideSlice.actions;