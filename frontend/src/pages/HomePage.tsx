import { useTranslation } from "react-i18next";

import { LANGUAGE, THEME } from "app/enums";
import { useLanguage } from "app/hooks/useLanguage";
import { useTheme } from "app/hooks/useTheme";

const HomePage = () => {
  const { t } = useTranslation(["home"]);

  const { setCurrentLanguage } = useLanguage();
  const { theme, setCurrentTheme } = useTheme();

  return (
    <div>
      <div>
        <h1>{t("home")}</h1>
        <button onClick={() => setCurrentLanguage(LANGUAGE.PL)}>PL</button>
        <button onClick={() => setCurrentLanguage(LANGUAGE.EN)}>EN</button>
      </div>
      <div>
        <h2>{theme}</h2>
        <button onClick={() => setCurrentTheme(THEME.LIGHT)}>Light</button>
        <button onClick={() => setCurrentTheme(THEME.DARK)}>Dark</button>
      </div>
    </div>
  );
};

export default HomePage;
