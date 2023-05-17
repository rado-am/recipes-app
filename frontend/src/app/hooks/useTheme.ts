import { useCallback } from "react";

import { setTheme } from "app/appSlice";
import type { THEME } from "app/enums";
import { useAppDispatch, useAppSelector } from "store/hooks";

import type { RootState } from "../../store/types";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state: RootState) => state.app);

  const setCurrentTheme = useCallback((theme: THEME) => {
    dispatch(setTheme(theme));
  }, []);

  return { theme, setCurrentTheme };
};
