import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeadingText } from "../atom/Headings";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { InfoLayout } from "../HOC/infoLayout";
import { useAPI } from "../hooks/API";
import { getImgSrc } from "../hooks/getImg";

// const checkIMGURL = (str) => !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);

export const EventsDetail = () => {
  const { g } = useLanguageContext();
  const { setImages } = useCarouselContext();
  const { id } = useParams();

  const { data, error } = useAPI(`/event/${id}`);
  useEffect(() => {
    if (data && data.images.length) setImages(data.images);
  }, [data]);
  if (error || !data) return <HeadingText>Loading ...</HeadingText>;
  return (
    <InfoLayout
      name={"Միջոցառումներ"}
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
