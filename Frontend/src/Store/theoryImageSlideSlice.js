import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "ADC Theory",
  imageUrl: "",
  content: "Ipsum Lorem"
}

const theoryImageSlideSlice = createSlice({
  name: 'theoryImageSlideSlice',
  initialState: initialState,
  reducers: {
    setTheoryImageSlideData(state, action) {
      console.log(action.payload)
      state.title = action.payload.title,
      state.imageUrl = action.payload.imageUrl,
      state.content = action.payload.content
    }
  }
})

export default theoryImageSlideSlice.reducer;
export const theoryImageSlideActions = theoryImageSlideSlice.actions;
