import slideControlReducer from "./slideControl";
import mcqSlideReducer from "./mcqSlide";
import unitInfoReducer from "./unitInfo";
import audioSlideReducer from './audioSlideSlice'
import theoryImageSlideReducer from './theoryImageSlideSlice'
import theoryComparativeSlideReducer from './theoryComparativeSlideSlice'
import modelSlideReducer from './modelSlideSlice'
import dndSlideReducer from './dndSlideSlice'
import matchingSlideReducer from './matchingSlideSlice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    mcqSlideSlice: mcqSlideReducer,
    audioSlideSlice: audioSlideReducer,
    slideControl : slideControlReducer,
    unitInfoSlice: unitInfoReducer,
    theoryImageSlideSlice: theoryImageSlideReducer,
    theoryComparativeSlideSlice: theoryComparativeSlideReducer,
    modelSlideSlice: modelSlideReducer,
    dndSlideSlice: dndSlideReducer,
    matchingSlideSlice: matchingSlideReducer
  }
});

export default store;