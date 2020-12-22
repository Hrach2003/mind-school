import React from "react";
import { useTranslation } from "react-i18next";
import { Grid4Cols } from "../atom/GridLayouts";
import { Title } from "../atom/Headings";
import { Tag } from "../atom/Tag";
import { useLanguageContext } from "../context/languageContext";
import { Section } from "./Section";

export const Tags = ({ tags }) => {
  const { g } = useLanguageContext();
  const { t } = useTranslation();
  return (
    <Section classes="mb-20" heading={<Title>{t("tags")}</Title>}>
      <Grid4Cols>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag[g("name")]}</Tag>
        ))}
      </Grid4Cols>
    </Section>
  );
};
