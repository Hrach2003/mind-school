import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";
import BG_TRIM from "../assets/Footer_img.png";
import { HeadingText, SubTitle } from "../atom/Headings";
import { Container } from "../atom/Container";
import { NavLink } from "react-router-dom";
import { useAPI } from "../hooks/API";
import { useLanguageContext } from "../context/languageContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo512.png";
// eslint-disable-next-line react/display-name
export const NavLinks = React.memo(({ ...props }) => {
  const { data } = useAPI("/creation-language/");
  const { g } = useLanguageContext();
  const { t } = useTranslation();

  return (
    <>
      <NavLink
        to="/"
        className="h-full cursor-pointer hidden md:block w-16 absolute inset-y-0 left-4"
      >
        <img src={logo} alt="Mind School" />
      </NavLink>
      <div className="items-center justify-center capitalize flex" {...props}>
        <HeadingText>
          {data &&
            data.results.map((info, idx) => {
              return (
                <NavLink key={info.id} to={`/creation-language/${info.id}`}>
                  {idx === data.results.length - 1 && " | "}
                  {info[g("name")]}
                </NavLink>
              );
            })}
        </HeadingText>
      </div>
      <div className="items-center justify-center capitalize flex" {...props}>
        <HeadingText>
          <NavLink to="/folk-musics">{t("folkMusic")}</NavLink> |{" "}
          <NavLink to="/folk-dances">{t("folkDance")}</NavLink>
        </HeadingText>
      </div>
      <div className="items-center justify-center capitalize flex" {...props}>
        <HeadingText>
          <NavLink to="/histories">{t("history")}</NavLink> |{" "}
          <NavLink to="/events">{t("events")}</NavLink>
        </HeadingText>
      </div>
    </>
  );
});

export const Header = () => {
  const [opacity, setOpacity] = useState(0);
  const handleScroll = useCallback(() => {
    window.scrollY > 100 ? setOpacity(1) : setOpacity(0);
  }, []);
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div
        style={opacity ? { backgroundImage: `url(${BG_TRIM})` } : {}}
        className={classnames(
          "w-full fixed top-0 transition-all duration-300 ease-in-out h-16 text-base z-40",
          {
            "bg-gray-200 bg-opacity-75": !opacity,
            "bg-blue-900 bg-opacity-100 shadow-2xl text-gray-200 bg-contain": opacity,
          }
        )}
      >
        <div className="mx-2 h-full flex justify-between items-center md:hidden">
          <button
            className={classnames(
              "rounded-full active:bg-gray-200 h-8 w-8 flex items-center justify-center font-light ml-1",
              {
                "text-gray-200": opacity,
                "text-gray-800": !opacity,
              }
            )}
            onClick={() => setDrawer((d) => !d)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <NavLink to="/" className="flex-grow text-center">
            <SubTitle classes="tracking-widest">Armenian Mind School</SubTitle>
          </NavLink>
        </div>
        <Container classes="h-full justify-between hidden md:flex">
          <NavLinks />
        </Container>
      </div>
      <div
        className={classnames(
          "fixed z-40 md:hidden bg-opacity-75 bg-gray-200 transition-transform transform mt-16 ease-in-out duration-300 inset-0",
          {
            "-translate-x-full": !drawer,
            "translate-x-0": drawer,
          }
        )}
      >
        <div className="flex flex-col space-y-2 pt-4">
          <NavLinks onClick={() => setDrawer((d) => !d)} />
        </div>
      </div>
    </>
  );
};
