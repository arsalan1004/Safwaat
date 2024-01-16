import React from 'react'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  columnOne: ["Middle of the throat", "End of the Tongue and the soft palate", "Middle of the tongue and roof of the mouth", "End of the tongue and the hard palate"],
  columnTwo: ["A", "B", "C", "D"],
  answers: {
    "GFS": "D",
    "DSA": "A",
    "Middle of the tongue and roof of the mouth": "B",
    "End of the tongue and the hard palate": "C"
  },
  tries: 0,
  isMatchComplete: false,
  isMatchCorrect: false,

}

const matchingSlideSlice = createSlice({
  name: "matchingSlideSlice",
  initialState: initialState,
  reducers: {
    setMatchingSlideData(state, action) {
      state.columnOne = action.payload.columnOne,
      state.columnTwo = action.payload.columnTwo,
      state.answers = action.payload.answers
    },
    setTries(state, action) {
      console.log(`tries dispatch ${action.payload}`)
      state.tries = action.payload
      if(state.tries == 4) {
        state.isMatchComplete = true;
      }

    },
    setIsMatchingCorrect(state, action) {
      state.isMatchCorrect = action.payload
    }
  }
})

export default matchingSlideSlice.reducer;
export const matchingSlideAction = matchingSlideSlice.actions;