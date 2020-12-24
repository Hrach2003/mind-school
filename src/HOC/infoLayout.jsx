import React, { useState } from "react";
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
import { Tags } from "../components/Tags";
import { getImgSrc } from "../hooks/getImg";

// eslint-disable-next-line react/display-name
export const InfoLayout = React.memo(
  // eslint-disable-next-line react/prop-types
  ({
    video,
    title,
    name,
    creator,
    created_at,
    main_image,
    images,
    tags,
    content,
    loading,
  }) => {
    const [activeImg, setActive] = useState(() => (video ? video : main_image));
    return (
      <Body>
        <Section heading={<Title>{name}</Title>} />
        {loading ? (
          <HeadingText>Loading ...</HeadingText>
        ) : (
          <Section classes="mb-32" heading={<SubTitle>{title}</SubTitle>}>
            <div className="w-full h-120 bg-gray-400">
              {video ? (
                <iframe
                  title="video"
                  className="w-full h-full"
                  src={video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={activeImg ? activeImg : main_image}
                  alt={`${title} ${name}`}
                ></img>
              )}
            </div>
            <Card>
              <Paragraph dangerouslySetInnerHTML={{ __html: content }} />

              <OverLay classes="uppercase font-medium mt-3">
                {creator}
                <br /> {created_at}
              </OverLay>
            </Card>

            <Grid4Cols>
              {images.length > 0 && (
                <Card
                  onClick={() => {
                    setActive(main_image);
                  }}
                  src={main_image}
                  noLine
                />
              )}
              {images.map((data) => {
                return (
                  <Card
                    onClick={() => {
                      setActive(getImgSrc(data));
                    }}
                    src={getImgSrc(data)}
                    key={data.id}
                    noLine
                  />
                );
              })}
            </Grid4Cols>
          </Section>
        )}

        {!loading && tags?.length > 0 && <Tags tags={tags} />}
      </Body>
    );
  }
);
