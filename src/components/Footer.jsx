import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Trim from "../assets/Footer_img.png";
import { Container } from "../atom/Container";
import { SubTitle } from "../atom/Headings";
import { Line } from "../atom/Line";

export const Footer = React.memo(() => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-blue-900 flex items-center justify-center bg-contain shadow-2xl"
      style={{ backgroundImage: `url(${Trim})` }}
    >
      <Container classes="my-6 py-1 bg-yellow-50 rounded">
        <div className="flex justify-center items-center my-4">
          <SubTitle classes="mx-2 md:mx-10 text-left">
            {t("contactUs")}
          </SubTitle>
          <div>
            <i className="fab fa-facebook-square text-blue-900 text-5xl"></i>
          </div>
          <SubTitle classes="mx-2 md:mx-10 text-right">
            <Link to="/about-us/">{t("aboutUs")}</Link>
          </SubTitle>
        </div>
        <Line classes="-mx-6 sm:-mx-10 h-3" />
        <div className="text-sm text-center">
          <i className="far fa-copyright"></i> Innovation Ethnic Regional Center
        </div>
      </Container>
    </div>
  );
});
