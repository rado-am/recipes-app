import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { LANGUAGE, THEME } from "./enums";
import type { AppState } from "./types";

const INITIAL_STATE: AppState = {
  theme: THEME.LIGHT,
  language: LANGUAGE.EN,
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LANGUAGE>) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = appSlice.actions;
export default appSlice.reducer;
