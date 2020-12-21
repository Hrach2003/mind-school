import React from "react";

export const Line = React.memo(({ classes, color = "red", ...props }) => {
  return (
    <div
      className={`rounded-full ${
        color === "blue" ? "bg-blue-900" : "bg-red-700"
      } ${classes}`}
      {...props}
    ></div>
  );
});
