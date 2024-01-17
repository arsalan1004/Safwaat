import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  audioQuestion: "",
  questionAudioUrl: "",
  audioOptions: ["اعؤذ", "بالله", "الشيطان", "الرجيم"],
  optionAudioUrl: ["a", "b", "c", "d"],
  correctAnswer: 0,
  selectedOption: -1
}


const audioSlideSlice = createSlice({
  name: "audioSlideSlice",
  initialState: initialState,
  reducers: {
    setSelected(state, action) {
      state.selectedOption = action.payload
    },
    setAudioData(state,action) {
      state.audioQuestion = action.payload.audioQuestion,
      state.questionAudioUrl = action.payload.questionAudioUrl,
      state.audioOptions = action.payload.audioOptions,
      state.optionAudioUrl = action.payload.optionAudioUrl,
      state.correctAnswer = action.payload.correctAnswer,
      state.selectedOption = action.payload.selectedOption
    }
  }
})

export default audioSlideSlice.reducer;
export const audioSlideActions = audioSlideSlice.actions;