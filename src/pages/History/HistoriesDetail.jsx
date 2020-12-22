import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarouselContext } from "../../context/carouselImage";
import { useLanguageContext } from "../../context/languageContext";
import { InfoLayout } from "../../HOC/infoLayout";
import { useAPI } from "../../hooks/API";
import { getImgSrc } from "../../hooks/getImg";

export const HistoryDetail = () => {
  const { g, t } = useLanguageContext();
  const { id } = useParams();
  const { data, error } = useAPI(`/history/${id}`);
  const { setImages } = useCarouselContext();
  useEffect(() => {
    if (data && data.images.length) {
      setImages(data.images);
    }
  }, [data, setImages]);
  return (
    <InfoLayout
      loading={!data && !error}
      name={t("history")}
      title={data?.[g("title")]}
      images={data?.images}
      main_image={getImgSrc(data)}
      creator={data?.[g("creator")]}
      created_at={data?.[g("created_at")]}
      tags={data?.tags}
      content={data?.[g("content")]}
    />
  );
};
