import React from "react";
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: "Makhraj No 1",
  mainContent: "It is the Lower Throat from which 3 Letters are articulated",
  audioOptions: [
    "a",
    "b",
    "c",
    "d"
  ],
  audioUrls: [
    "", "", "", ""
  ]
}

const teachAudioSlideSlice = createSlice({
  name: "teachAudioSlideSlice",
  initialState: initialState,
  reducers: {
    setTeachAudioSlideData(state, action) {
      state.title = action.payload.title,
      state.mainContent = action.payload.mainContent,
      state.audioOptions = action.payload.audioOptions,
      state.audioUrls = action.payload.audioUrls
    }
  }
})

export default teachAudioSlideSlice.reducer;
export const teachAudioSlideActions = teachAudioSlideSlice.actions;
