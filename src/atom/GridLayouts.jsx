import React from "react";

export const Grid2Cols = React.memo(({ classes, children, ...props }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-5 ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
});

export const Grid3Cols = React.memo(({ classes, children, ...props }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-5 ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
});

export const Grid4Cols = React.memo(({ classes, children, ...props }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-4 ${classes}`}
      {...props}
    >
      {children}
    </div>
  );
});
