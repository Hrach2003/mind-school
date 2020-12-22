import React from "react";
import { useTranslation } from "react-i18next";
import { HeadingText } from "../atom/Headings";

export const Empty = () => {
  const { t } = useTranslation();
  return <HeadingText>{t("nothingHere")}</HeadingText>;
};
