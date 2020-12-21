import React from "react";
import { Body } from "../atom/Body";
import { Grid3Cols } from "../atom/GridLayouts";
import { Title, HeadingText } from "../atom/Headings";
import { Card } from "../components/Card";
import { Section } from "../components/Section";

export const WesternArmenian = () => {
  return (
    <Body>
      <Section heading={<Title>Արևմտահայերեն</Title>}>
        <Grid3Cols>
          {new Array(6).fill(" ").map((_, idx) => (
            <Card key={idx} src={"idx"}>
              <HeadingText>Մշո Խըռ</HeadingText>
            </Card>
          ))}
        </Grid3Cols>
      </Section>
    </Body>
  );
};
