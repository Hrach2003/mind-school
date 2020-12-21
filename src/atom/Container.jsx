import React from "react";

export const Container = React.memo(({ classes, children, ...props }) => {
  return (
    <div className={`w-9/12 mx-auto ${classes}`} {...props}>
      {children}
    </div>
  );
});
