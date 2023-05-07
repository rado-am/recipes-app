import { setLanguage } from "app/appSlice";
import { Language } from "app/enums";
import { useAppDispatch } from "store/hooks";

interface Props {
  language: Language;
}

const useLanguage = ({ language }: Props) => {
  const dispatch = useAppDispatch();

  dispatch(setLanguage(language));
};

export default useLanguage;
