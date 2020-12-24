import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { useAPI } from "../hooks/API";

import { InfoLayout } from "../HOC/infoLayout";
import { getImgSrc } from "../hooks/getImg";
import { haveVideo } from "../hooks/getImg";

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
  const info = data?.[data?.length - 1];
  return (
    <InfoLayout
      video={haveVideo(info)}
      loading={!info && !error}
      name={t("armenianMindSchool")}
      title={t("aboutUs")}
      images={info?.images}
      main_image={getImgSrc(info)}
      creator={info?.[g("creator")]}
      created_at={info?.[g("created_at")]}
      tags={info?.tags}
      content={info?.[g("content")]}
    />
  );
};
