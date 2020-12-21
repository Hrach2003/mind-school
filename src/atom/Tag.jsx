import React from "react";

export const Tag = React.memo(({ children, classes, ...props }) => {
  return (
    <button
      className={`rounded-full py-3 my-2 bg-gray-500 text-gray-100 ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
});
