import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  unitNumber: 1,
  slideIdArray: [],
  numberOfCorrectAnswers: 0,
  numberofWrongAnswers: 0,
  totalNumberOfQuestions: 0,
  perStarXp: 0,
  stars: 0, 
}

const unitInfoSlice = createSlice({
  name: 'unitInfoSlice',
  initialState: initialState,
  reducers: {
    incrementCorrectAnswer(state) {
      state.numberOfCorrectAnswers = state.numberOfCorrectAnswers + 1;
    },
    incrementWrongAnswer(state) {
      state.numberofWrongAnswers = state.numberofWrongAnswers + 1;
    },
    setSlideIdArray(state, action) {
      console.log(state.slideIdArray);
      state.slideIdArray = action.payload;
      console.log(state.slideIdArray);
    },
    setTotalNumberOfQuestions(state, action) {
      state.totalNumberOfQuestions = action.payload;
    },
    setPerStarXp(state, action) {
      state.perStarXp = action.payload;
    },
    setNumberOfStars(state) {
      let percentage = Number(state.numberOfCorrectAnswers / state.totalNumberOfQuestions) * 100;
      console.log(percentage)
      if(percentage < 30) state.stars = 0;
      else if(percentage <= 60 ) state.stars = 1;
      else if(percentage <= 90 ) state.stars = 2;
      else state.stars = 3;

    },
  }
});

export default unitInfoSlice.reducer;
export const unitInfoActions = unitInfoSlice.actions;

