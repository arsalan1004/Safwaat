import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mcqOptions: ["ع", "ب", "ل", "ح"],
  mcqQuestion: "Which one has the صفت of Hams?",
  correctAnswer: 0,
  selectedOption: -1
};

const mcqSlideSlice = createSlice({
  name: 'mcqSlideSlice',
  initialState: initialState,
  reducers: {
    setSelected(state, action) {
      state.selectedOption = action.payload
    },
    setMcqData(state, action) {
      state.mcqOptions = action.payload.mcqOptions;
      state.mcqQuestion = action.payload.mcqQuestion;
      state.correctAnswer = action.payload.correctAnswer;
      state.selectedOption = action.payload.selectedOption;
      
    }
  }
})

export default mcqSlideSlice.reducer;
export const mcqSlideActions = mcqSlideSlice.actions;
