import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  heading: "A vs B",
  columnOne: ["A1", "A2"],
  columnTwo: ["B1", "B2"]
}

const theoryComparativeSlideSlice = createSlice({
  name: 'theoryComparativeSlideSlice',
  initialState: initialState,
  reducers: {
    setTheoryComparativeSlideData(state, action) {
      console.log(action.payload)
      state.heading = action.payload.heading,
      state.columnOne = action.payload.columnOne,
      state.columnTwo = action.payload.columnTwo
    }
  }
})

export default theoryComparativeSlideSlice.reducer;
export const theoryComparativeSlideActions = theoryComparativeSlideSlice.actions;