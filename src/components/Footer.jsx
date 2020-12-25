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
          <Link to="https://www.facebook.com/%D5%80%D5%A1%D5%B5-%D5%84%D5%BF%D6%84%D5%AB-%D4%B4%D5%BA%D6%80%D5%B8%D6%81-635310790431523">
            <i className="fab fa-facebook-square text-blue-900 text-5xl"></i>
          </Link>
          <SubTitle classes="mx-2 md:mx-10 text-right">
            <Link to="/about-us/">{t("aboutUs")}</Link>
          </SubTitle>
        </div>
        <Line classes="-mx-6 sm:-mx-10 h-3" />
        <Link className="text-sm text-center" to="https://ierc.am">
          <i className="far fa-copyright"></i> Innovation Ethnic Regional Center
        </Link>
      </Container>
    </div>
  );
});
