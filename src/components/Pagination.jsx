import React from "react";
import classnames from "classnames";

export const Pagination = ({ handleNext, handlePrev, next, prev }) => {
  return (
    <div className="flex justify-center">
      {(prev || next) && (
        <>
          <button
            disabled={!prev}
            onClick={handlePrev}
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
            disabled={!next}
            onClick={handleNext}
            className={classnames(
              "h-8 w-8 rounded-full bg-red-700 text-white shadow-lg flex items-center justify-center mx-1",
              {
                "opacity-50": !next,
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
