import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HeadingText } from "./Headings";

import Slack from "../assets/slack.svg";

export const SeeAllBtn = React.memo(({ classes, children, to, ...props }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={to}
      className={`rounded-full text-gray-200 bg-blue-900 shadow-xl px-3 md:px-4 py-1 md:py-2 flex items-center ${classes}`}
      {...props}
    >
      <img src={Slack} className="w-8 mx-1" alt="slack" />
      <HeadingText>{children ? children : t("seeMore")}</HeadingText>
    </Link>
  );
});
