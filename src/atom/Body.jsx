import React from "react";
import BG_Trim from "../assets/background_trim.png";

export const Body = React.memo(({ classes, children, ...props }) => {
  return (
    <div
      className={`pb-12 mt-5 bg-contain bg-repeat-y ${classes}`}
      style={{ backgroundImage: `url(${BG_Trim})` }}
      {...props}
    >
      {children}
    </div>
  );
});
