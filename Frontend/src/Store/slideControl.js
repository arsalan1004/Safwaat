import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  slideType: "dnd",
  isChecked: false,
  isCorrect: true,
  isMotivation: false,
  totalSlides: 10,
  currentSlide: 1,
  progressCounter: 1,
}

const slideControlSlice = createSlice({
  name: 'slideControl',
  initialState: initialState,

  reducers: {
    incrementCurrentSlide(state) {
      state.currentSlide = state.currentSlide + 1;
    },
    incrementProgressCounter(state) {
      state.progressCounter = state.progressCounter + 1;
    },
    decrementCurrentSlide(state) {
      state.currentSlide = state.currentSlide - 1;
      
    },
    setIsChecked(state, action) {
      console.log("Is Checked Triggered");
      console.log(action.payload);
      state.isChecked = action.payload
    },
    setIsCorrect(state, action) {
      state.isCorrect = action.payload
    },
    setIsMotivation(state, action) {
      state.isMotivation = action.payload;
    },
    setSlideType(state, action){
      state.slideType = action.payload;
    },
    setTotalSlides(state, action) {
      state.totalSlides = action.payload;
    }
  }
});


export default slideControlSlice.reducer;
export const slideControlActions = slideControlSlice.actions;
// export default store;