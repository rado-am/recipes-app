import { setLanguage } from "app/appSlice";
import { Language } from "app/enums";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../../store/types";

const useLanguage = () => {
  const dispatch = useAppDispatch();
  const activeLanguage = useSelector((state: RootState) => state.app.language);

  const setCurrentLanguage = useCallback((language) => {
    dispatch(setLanguage(language));
  }, []);
  return { activeLanguage, setCurrentLanguage };
};

export default useLanguage;
