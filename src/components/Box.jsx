import React, { useState } from "react";
import classnames from "classnames";
import { OverLay, Paragraph } from "../atom/Headings";
import { Line } from "../atom/Line";

// eslint-disable-next-line react/display-name
export const Box = React.memo(
  // eslint-disable-next-line react/prop-types
  ({ classes, content, creator, created_at, ...props }) => {
    const [opened, setOpened] = useState(false);
    return (
      <div
        className={classnames(`box ${classes}`, { open: opened })}
        {...props}
      >
        <Paragraph classes="transition-all duration-200 ease-in-out truncate-4">
          {content}
        </Paragraph>
        <OverLay classes="mt-2">
          {creator} <br /> {created_at}
        </OverLay>
        <Line classes="h-1 mt-2" />
        <div className="flex justify-end">
          <button
            className="rounded-full mt-1 px-2"
            onClick={() => setOpened((o) => !o)}
          >
            <Paragraph classes="font-semibold">
              {opened ? "Վերադառնալ" : "Կարդալ Ավելին"}
            </Paragraph>
          </button>
        </div>
      </div>
    );
  }
);
