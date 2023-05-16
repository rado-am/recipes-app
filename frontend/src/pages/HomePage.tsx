import { useTranslation } from "react-i18next";

import { Language } from "app/enums";
import { useLanguage } from "app/hooks/useLanguage";

const HomePage = () => {
  const { t } = useTranslation(["home"]);

  const { setCurrentLanguage } = useLanguage();

  return (
    <div>
      <h1>{t("home")}</h1>
      <button onClick={() => setCurrentLanguage(Language.PL)}>PL</button>
      <button onClick={() => setCurrentLanguage(Language.EN)}>EN</button>
    </div>
  );
};

export default HomePage;
