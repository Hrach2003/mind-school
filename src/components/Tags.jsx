import React from "react";
import { Grid4Cols } from "../atom/GridLayouts";
import { Title } from "../atom/Headings";
import { Tag } from "../atom/Tag";
import { useLanguageContext } from "../context/languageContext";
import { Section } from "./Section";

// eslint-disable-next-line react/prop-types
export const Tags = ({ tags }) => {
  const { g } = useLanguageContext();
  return (
    <Section classes="mb-20" heading={<Title>Թեգեր</Title>}>
      <Grid4Cols>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag[g("name")]}</Tag>
        ))}
      </Grid4Cols>
    </Section>
  );
};
