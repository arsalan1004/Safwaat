import React from 'react'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boxOneHeading: "A",
  boxTwoHeading: "B",
  boxOneList: [],
  boxTwoList: [],
  options: ['A', 'B', 'C', 'D', 'E', 'F'],
  originalOptions: ['A', 'B', 'C', 'D', 'E', 'F'],
  correctAnswers: {
    'A': 'box1', 
    'B': 'box2', 
    'C': 'box1', 
    'D': 'box2',
    'E': 'box1',
    'F': 'box2',

  },
  styleDict: {

  },
  dndIsCorrect: false
}

const dndSlideSlice = createSlice({
  name: "dndSlideSlice",
  initialState: initialState,
  reducers: {
    setDndData(state,action) {
      state.options = action.payload.options,
      state.originalOptions = action.payload.options,
      state.boxOneHeading = action.payload.boxOneHeading,
      state.boxTwoHeading = action.payload.boxTwoHeading,
      state.correctAnswers = action.payload.correctAnswers
      state.styleDict = action.payload.correctAnswers
    },
    setBoxOneList(state, action) {
      state.boxOneList = action.payload;
     
    },
    setBoxTwoList(state, action) {
      state.boxTwoList = action.payload;
      
    },
    setOptions(state, action) {
      state.options = action.payload;
    },
    reset(state) {
      state.boxOneList = [];
      state.boxTwoList = [];
      state.options = state.originalOptions;
    },
    setDndOptionIsCorrect(state, action) {
      state.dndIsCorrect = action.payload;
    },
    calculateResult(state) {
      console.log("result Called");
      // box -> wrong -> break -> dndIsCorrect: false
      let temp = true;

      // for(i = 0; i< boxOneList.length; ++i) {
      //   if(state.correctAnswers[option] != 'box1') {
      //     temp = false;
      //     break;
      //   }
      // }


      state.boxOneList.forEach((option) => {
        if(state.correctAnswers[option] != 'box1') {
          temp = false;
        }
      })
      
      state.dndIsCorrect = temp;
      console.log(`dndIsCorrect IN reducer : ${state.dndIsCorrect}`);
    }
  }
})


export default dndSlideSlice.reducer;
export const dndSlideActions = dndSlideSlice.actions;

