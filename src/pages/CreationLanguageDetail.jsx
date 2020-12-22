import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoLayout } from "../HOC/infoLayout";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { useAPI } from "../hooks/API";
import { getImgSrc } from "../hooks/getImg";

export const CreationLanguageDetails = () => {
  const { name, creation_id } = useParams(); // , id, creation_id
  const { setImages } = useCarouselContext();
  const { g } = useLanguageContext();

  const { data, error } = useAPI(`/creation/${creation_id}`);
  useEffect(() => {
    if (data && data.images.length) setImages(data.images);
  }, [data, setImages]);
  return (
    <InfoLayout
      loading={!data && !error}
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
