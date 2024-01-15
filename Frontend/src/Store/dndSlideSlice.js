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
      state.correctAnswers = action.payload.correctAnswers,
      state.boxOneList = [],
      state.boxTwoList = [],
      state.styleDict = {},
      state.dndIsCorrect = false
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
      let tempStyleDict = {};
      // for(i = 0; i< boxOneList.length; ++i) {
      //   if(state.correctAnswers[i] != 'box1') {
      //     temp = false;
      //     tempStyleDict
      //     break;
      //   }
      //   tempStyleDict =
      // }


      state.boxOneList.forEach((option) => {
        if(state.correctAnswers[option] != 'box1') {
          temp = false;
          tempStyleDict[`${option}`] = 'wrong'
        }
        else {
          
          tempStyleDict[`${option}`] = 'correct'
        }
      })
      state.boxTwoList.forEach((option) => {
        if(state.correctAnswers[option] != 'box2') {
          temp = false;
          tempStyleDict[`${option}`] = 'wrong'
        }
        else {
          tempStyleDict[`${option}`] = 'correct'
        }
      })
      state.styleDict = tempStyleDict;
      state.dndIsCorrect = temp;
      console.log(`dndIsCorrect IN reducer : ${state.dndIsCorrect}`);
    },
    resetDnd(state) {
      state.options = initialState.options,
      state.originalOptions = initialState.options,
      state.boxOneHeading = initialState.boxOneHeading,
      state.boxTwoHeading = initialState.boxTwoHeading,
      state.correctAnswers = initialState.correctAnswers,
      state.styleDict = {},
      state.dndIsCorrect = false
    }
  }
})


export default dndSlideSlice.reducer;
export const dndSlideActions = dndSlideSlice.actions;

