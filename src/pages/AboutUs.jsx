import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Body } from "../atom/Body";
import { Grid4Cols } from "../atom/GridLayouts";
import {
  Title,
  SubTitle,
  Paragraph,
  OverLay,
  HeadingText,
} from "../atom/Headings";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { useAPI } from "../hooks/API";

export const AboutUs = () => {
  const { data, error } = useAPI("/about-us");
  const { setImages } = useCarouselContext();
  const { g } = useLanguageContext();
  const { t } = useTranslation();
  useEffect(() => {
    if (data && !error) {
      setImages(data[0].images);
    }
  }, [data, error, setImages]);
  if (error) return <HeadingText>Loading ...</HeadingText>;
  if (!data) return <HeadingText>Loading ...</HeadingText>;
  const info = data[0]; // data.length - 1
  return (
    <Body>
      <Section heading={<Title>{t("armenianMindSchool")}</Title>} />
      <Section
        classes="mb-32 mt-12"
        heading={<SubTitle>{t("aboutUs")}</SubTitle>}
      >
        <Card>
          <Paragraph>{info.content}</Paragraph>
          <OverLay classes="uppercase font-medium mt-3">
            {info[g("creator")]}
            <br /> {info[g("created_at")]}
          </OverLay>
        </Card>

        <Grid4Cols classes="mt-4">
          {info.images.map(({ file, id }) => {
            return <Card src={file} key={id} noLine />;
          })}
        </Grid4Cols>
      </Section>
    </Body>
  );
};
