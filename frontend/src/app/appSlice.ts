import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Language, Theme } from "./enums";
import type { AppState } from "./types";

const INITIAL_STATE: AppState = {
  theme: Theme.LIGHT,
  language: Language.EN,
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = appSlice.actions;
export default appSlice.reducer;
