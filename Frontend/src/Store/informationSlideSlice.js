import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Makhraj",
  mainContent: "Makhraj is the position of the point of articulation from which sound of letter is produced or stops at",
  extraInfo: "For example middle of the throat for ع to ح"
}

const informationSlideSlice = createSlice({
  name: "informationSlideSlice",
  initialState: initialState,
  reducers: {
    setInformationData(state, action) {
      state.title = action.payload.title,
      state.mainContent = action.payload.mainContent,
      state.extraInfo = action.payload.extraInfo
    }
  }
})

export default informationSlideSlice.reducer;
export const informationSlideActions = informationSlideSlice.actions;