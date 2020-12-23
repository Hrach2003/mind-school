import React from "react";
import { Line } from "../atom/Line";

export const Card = React.memo(
  ({ classes, children, src, noLine = false, url, ...props }) => {
    return (
      <div className={`w-full cursor-pointer ${classes}`} {...props}>
        {src && (
          <div className="h-48 w-full bg-red-700">
            <img src={src} alt={`${url}`}></img>
          </div>
        )}
        <div className="my-2">
          {children}
          {!noLine && <Line classes="h-2 mt-1" />}
        </div>
      </div>
    );
  }
);
