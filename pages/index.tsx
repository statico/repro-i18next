import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>i18n test</h1>
      <p>
        The following should read “It's working!” and not “common:test-message”
      </p>
      <p>{t("common:test-message")}</p>
    </div>
  );
}
