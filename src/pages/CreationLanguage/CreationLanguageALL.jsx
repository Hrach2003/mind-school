import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Body } from "../../atom/Body";
import { Grid3Cols } from "../../atom/GridLayouts";
import { HeadingText, Title } from "../../atom/Headings";
import { Card } from "../../components/Card";
import { Empty } from "../../components/Empty";
import { Section } from "../../components/Section";
import { useCarouselContext } from "../../context/carouselImage";
import { useLanguageContext } from "../../context/languageContext";
import { useAPI } from "../../hooks/API";
import { getImgSrc } from "../../hooks/getImg";

export const CreationLanguageALL = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data } = useAPI(`/creation-language/${id}`);
  const { g } = useLanguageContext();

  const { setImages } = useCarouselContext();

  useEffect(() => {
    if (data && data.creation.length) {
      setImages(data.creation);
    }
  }, [data, setImages]);

  return (
    <Body>
      <Section heading={<Title classes="">{data?.[g("name")]}</Title>}>
        <Grid3Cols>
          {data &&
            data.creation.map((info) => (
              <Card
                key={info.id}
                src={getImgSrc(info)}
                onClick={() =>
                  history.push(`/creation-language/${id}/${info.id}`)
                }
              >
                <HeadingText>{info?.[g("title")]}</HeadingText>
              </Card>
            ))}
          {data && data.creation.length === 0 && <Empty />}
        </Grid3Cols>
      </Section>
    </Body>
  );
};
