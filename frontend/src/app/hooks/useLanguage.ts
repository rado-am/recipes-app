import { setLanguage } from "app/appSlice";
import { Language } from "app/enums";
import { useAppDispatch } from "store/hooks";

const useLanguage = () => {
  const dispatch = useAppDispatch();

  dispatch(setLanguage(Language.PL));
};

export default useLanguage;
