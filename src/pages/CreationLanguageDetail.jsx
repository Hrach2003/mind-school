import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoLayout } from "../HOC/infoLayout";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { useAPI } from "../hooks/API";
import { getImgSrc } from "../hooks/getImg";
import { HeadingText } from "../atom/Headings";

export const CreationLanguageDetails = () => {
  const { name, creation_id } = useParams(); // , id, creation_id
  const { setImages } = useCarouselContext();
  const { g } = useLanguageContext();

  const { data } = useAPI(`/creation/${creation_id}`);
  useEffect(() => {
    if (data) setImages(data.images);
  }, [data]);
  if (!data) return <HeadingText>Loading ...</HeadingText>;
  return (
    <InfoLayout
      name={name}
      title={data[g("title")]}
      images={data.images}
      main_image={getImgSrc(data)}
      creator={data[g("creator")]}
      created_at={data[g("created_at")]}
      tags={data.tags}
      content={data[g("content")]}
    />
  );
};
