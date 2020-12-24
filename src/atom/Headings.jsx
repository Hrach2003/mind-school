import React from "react";

export const Title = React.memo(({ classes, children, ...props }) => {
  return (
    <h2
      className={`text-4xl md:text-6xl font-medium whitespace-pre-wrap ${classes}`}
      {...props}
    >
      {children}
    </h2>
  );
});

export const SubTitle = React.memo(({ classes, children, ...props }) => {
  return (
    <h4
      className={`text-xl md:text-2xl m-0 p-0 whitespace-pre-wrap font-semibold ${classes}`}
      {...props}
    >
      {children}
    </h4>
  );
});

export const HeadingText = React.memo(({ classes, children, ...props }) => {
  return (
    <h6
      className={`text-base md:text-lg whitespace-pre-wrap font-semibold ${classes}`}
      {...props}
    >
      {children}
    </h6>
  );
});

export const Paragraph = React.memo(({ classes, children, ...props }) => {
  return (
    <p
      className={`text-sm font-medium whitespace-pre-wrap  ${classes}`}
      {...props}
    >
      {children}
    </p>
  );
});

export const OverLay = React.memo(({ classes, children, ...props }) => {
  return (
    <p className={`text-xs font-medium ${classes}`} {...props}>
      {children}
    </p>
  );
});
