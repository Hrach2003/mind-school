import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Body } from "../atom/Body";
import { Grid3Cols } from "../atom/GridLayouts";
import { HeadingText, Title } from "../atom/Headings";
import { Card } from "../components/Card";
import { Empty } from "../components/Empty";
import { Pagination } from "../components/Pagination";
import { Section } from "../components/Section";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { useAPI } from "../hooks/API";
import { getImgSrc } from "../hooks/getImg";

export const MainPage = React.memo(({ url, name }) => {
  const history = useHistory();
  const [pageIdx, setPageIdx] = useState(1);

  const { data, error } = useAPI(`${url}/?page=${pageIdx}`);
  const { setImages } = useCarouselContext();
  const { g } = useLanguageContext();

  useEffect(() => {
    if (data && !error && data.results.length)
      setImages(data.results.filter((el) => !!getImgSrc(el)));
  }, [data, error, setImages]);

  if (error || !data) return <HeadingText>Loading ...</HeadingText>;
  const res = data.results;

  return (
    <Body>
      <Section heading={<Title classes="">{name}</Title>}>
        <Grid3Cols>
          {res.map((data) => (
            <Card
              key={data.id}
              src={getImgSrc(data)}
              onClick={() => history.push(`${url}/${data.id}/`)}
            >
              <HeadingText>{data[g("title")]}</HeadingText>
            </Card>
          ))}

          {res.length === 0 && <Empty />}
        </Grid3Cols>

        <Pagination
          prev={!!data.previous}
          next={!!data.next}
          handleNext={() => {
            setPageIdx((idx) => idx + 1);
            console.log("called");
          }}
          handlePrev={() => setPageIdx((idx) => idx - 1)}
        />
      </Section>
    </Body>
  );
});
