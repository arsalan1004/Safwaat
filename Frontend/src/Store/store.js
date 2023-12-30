import slideControlReducer from "./slideControl";
import mcqSlideReducer from "./mcqSlide";
import unitInfoReducer from "./unitInfo";
import audioSlideReducer from './audioSlideSlice'
import theoryImageSlideReducer from './theoryImageSlideSlice'
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    mcqSlideSlice: mcqSlideReducer,
    audioSlideSlice: audioSlideReducer,
    slideControl : slideControlReducer,
    unitInfoSlice: unitInfoReducer,
    theoryImageSlideSlice: theoryImageSlideReducer
  }
});

export default store;