import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Body } from "../../atom/Body";
import { Grid2Cols } from "../../atom/GridLayouts";
import { HeadingText, Title } from "../../atom/Headings";
import { Card } from "../../components/Card";
import { Empty } from "../../components/Empty";
import { Section } from "../../components/Section";
// import { useCarouselContext } from "../../context/carouselImage";
import { useLanguageContext } from "../../context/languageContext";
import { useAPI } from "../../hooks/API";
import { getImgSrc } from "../../hooks/getImg";

export const CreationLanguageTypes = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data } = useAPI(`/creation-language/${id}`);
  const { g } = useLanguageContext();

  // const { setImages } = useCarouselContext();

  // useEffect(() => {
  //   if (data && data.creation.length) {
  //     setImages(data.creation);
  //   }
  // }, [data, setImages]);

  return (
    <Body>
      <Section heading={<Title classes="">{data?.[g("name")]}</Title>}>
        <Grid2Cols>
          {data &&
            data?.type?.map((info) => (
              <Card
                classes="px-2 sm:px-10 md:px-16"
                key={info.id}
                src={getImgSrc(info)}
                onClick={() => history.push(`/type/${info.id}/`)}
              >
                <HeadingText>{info?.[g("name")]}</HeadingText>
              </Card>
            ))}
          {data && data.type.length === 0 && <Empty />}
        </Grid2Cols>
      </Section>
    </Body>
  );
};
