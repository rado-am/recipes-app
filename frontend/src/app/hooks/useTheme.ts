import { setTheme } from "app/appSlice";
import { Theme } from "app/enums";
import { useAppDispatch } from "store/hooks";

const useTheme = () => {
  const dispatch = useAppDispatch();

  dispatch(setTheme(Theme.DARK));
};

export default useTheme;
