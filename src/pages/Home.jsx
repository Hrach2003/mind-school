import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Body } from "../atom/Body";
import { Grid3Cols } from "../atom/GridLayouts";
import { HeadingText, OverLay, SubTitle } from "../atom/Headings";
import { SeeAllBtn } from "../atom/SeeAllBtn";
import { axiosInstance, useAPI } from "../hooks/API";
import { getImgSrc } from "../hooks/getImg";
import { useHistory } from "react-router-dom";
import { useCarouselContext } from "../context/carouselImage";
import { useLanguageContext } from "../context/languageContext";
import { Empty } from "../components/Empty";
import { useTranslation } from "react-i18next";

const SeeMoreWrapper = ({ to, ...props }) => {
  return (
    <div className="flex justify-end mt-2">
      <SeeAllBtn to={to} {...props} />
    </div>
  );
};

// eslint-disable-next-line react/display-name
export const Home = React.memo(() => {
  const history = useHistory();
  const { data: musics } = useAPI("/folk-musics");
  const { data: dances } = useAPI("/folk-dances");
  const { data: creation_languages } = useAPI("/creation-language");
  const { g } = useLanguageContext();
  const [creationsByLang, setCreationsByLang] = useState([]);
  const { setImages } = useCarouselContext();

  useEffect(() => {
    if (creation_languages && creation_languages.results.length) {
      setCreationsByLang([]);
      creation_languages.results.forEach(async (lang) => {
        const { data } = await axiosInstance.get(
          `/creation-language/${lang.id}`
        );
        setCreationsByLang((d) => [
          ...d,
          { name: lang.name, id: lang.id, creation: data.creation },
        ]);
      });
    }
  }, [creation_languages, g]);

  useEffect(() => {
    if (musics && dances)
      setImages(
        [...musics.results, ...dances.results].filter((el) => !!getImgSrc(el))
      );
  }, [dances, musics, setImages]);
  const { t } = useTranslation();
  return (
    <Body>
      {creationsByLang.length &&
        creationsByLang.map(({ name, id, creation }) => {
          return (
            <Section
              key={id}
              heading={<SubTitle classes="pb-2">{name}</SubTitle>}
            >
              {creation.length === 0 ? (
                <Empty />
              ) : (
                <Grid3Cols>
                  {creation.map((cr) => {
                    return (
                      <Box
                        key={cr.id}
                        content={cr[g("content")]}
                        creator={cr[g("creator")]}
                        created_at={cr[g("created_at")]}
                      />
                    );
                  })}
                </Grid3Cols>
              )}
              <SeeMoreWrapper to={`/creation-language/${id}`} />
            </Section>
          );
        })}

      <Section heading={<SubTitle classes="pb-2">{t("folkDance")}</SubTitle>}>
        <Grid3Cols>
          {musics &&
            musics.results.map((info) => (
              <Card
                key={info.id}
                src={getImgSrc(info)}
                onClick={() => history.push(`/folk-musics/${info.id}`)}
              >
                <HeadingText>{info.title}</HeadingText>
                <OverLay classes="uppercase">{info.creator}</OverLay>
              </Card>
            ))}
          {musics && musics.results.length === 0 && <Empty />}
        </Grid3Cols>

        <SeeMoreWrapper to="/folk-musics" />
      </Section>
      <Section heading={<SubTitle classes="pb-2">{t("folkMusic")}</SubTitle>}>
        <Grid3Cols>
          {dances &&
            dances.results.map((info) => (
              <Card
                key={info.id}
                src={getImgSrc(info)}
                onClick={() => history.push(`/folk-dances/${info.id}`)}
              >
                <HeadingText>{info.title}</HeadingText>
                <OverLay classes="uppercase">{info.creator}</OverLay>
              </Card>
            ))}
          {dances && dances.results.length === 0 && <Empty />}
        </Grid3Cols>

        <SeeMoreWrapper to="/folk-dances" />
      </Section>
    </Body>
  );
});
