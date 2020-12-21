import React from "react";
import { Body } from "../atom/Body";
import { Grid4Cols } from "../atom/GridLayouts";
import { Title, SubTitle, Paragraph, OverLay } from "../atom/Headings";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Tags } from "../components/Tags";
import { getImgSrc } from "../hooks/getImg";

// eslint-disable-next-line react/display-name
export const InfoLayout = React.memo(
  // eslint-disable-next-line react/prop-types
  ({ title, name, creator, created_at, main_image, images, tags, content }) => {
    return (
      <Body>
        <Section heading={<Title>{name}</Title>} />
        <Section classes="mb-32" heading={<SubTitle>{title}</SubTitle>}>
          <div className="w-full h-120 bg-gray-400">
            <img src={main_image} alt={`${title} ${name}`}></img>
          </div>
          <Card>
            <Paragraph>{content}</Paragraph>

            <OverLay classes="uppercase font-medium mt-3">
              {creator}
              <br /> {created_at}
            </OverLay>
          </Card>

          <Grid4Cols>
            {images.map((data) => {
              return <Card src={getImgSrc(data)} key={data.id} noLine />;
            })}
          </Grid4Cols>
        </Section>
        {tags && <Tags tags={tags} />}
      </Body>
    );
  }
);
