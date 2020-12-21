import React from "react";
import classnames from "classnames";

export const Pagination = ({ nextHandler, prevHandler, next, prev }) => {
  return (
    <div className="flex justify-center">
      {(prev || next) && (
        <>
          <button
            disabled={prev}
            onClick={prevHandler}
            className={classnames(
              "h-8 w-8 rounded-full bg-red-700 text-white shadow-lg flex items-center justify-center mx-1",
              {
                "opacity-50": !prev,
              }
            )}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            disabled={next}
            onClick={nextHandler}
            className={classnames(
              "h-8 w-8 rounded-full bg-red-700 text-white shadow-lg flex items-center justify-center mx-1",
              {
                "opacity-50": !prev,
              }
            )}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </>
      )}
    </div>
  );
};
