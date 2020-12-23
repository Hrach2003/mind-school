import React, { useState } from "react";
import classnames from "classnames";
import { useCarouselContext } from "../context/carouselImage";
import { getImgSrc } from "../hooks/getImg";
import { useLanguageContext } from "../context/languageContext";

export const Carousel = () => {
  const { setActiveLang } = useLanguageContext();
  const [position, setPosition] = useState(0);
  const { images } = useCarouselContext();
  const goTo = (idx) => {
    if (idx > images.length - 1) return setPosition(0);
    if (idx < 0) return setPosition(images.length - 1);
    return setPosition(idx);
  };

  return (
    <div className="flex items-center overflow-hidden z-10 m-0 p-0 h-80 sm:h-90 md:h-120 w-full relative">
      {images.map((image) => {
        return (
          <div
            className="min-w-full h-full relative slide"
            key={image.id}
            style={{ transform: `translateX(${position * -100}%)` }}
          >
            <img
              src={getImgSrc(image)}
              className="object-cover h-full w-full"
              alt="mind school"
            />
          </div>
        );
      })}
      <div className="absolute z-50 bottom-0 inset-x-0 flex justify-center">
        <div className="flex flex-col">
          <span className="block text-center font-semibold flex-auto mb-1 mx-auto px-3 py-1 bg-gray-300 bg-opacity-50 rounded-full">
            <button
              className="rounded-full px-1"
              onClick={() => setActiveLang("hy")}
            >
              Հայ․
            </button>
            |
            <button
              className="rounded-full px-1"
              onClick={() => setActiveLang("en")}
            >
              Eng․
            </button>
          </span>
          <div className="relative w-64">
            <input className="rounded-full px-4 py-1 pr-8 w-full" type="text" />
            <span className="absolute inset-y-0 right-0 flex items-center mr-2">
              <i className="fas fa-search" />
            </span>
          </div>
          <div className="flex justify-center my-2 space-x-2">
            {images.map((_, i) => {
              return (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  className={classnames(
                    "transition-all cursor-pointer duration-200 rounded-full h-4 w-4",
                    {
                      "shadow-outline bg-red-700": position === i,
                      "bg-white shadow-2xl": position !== i,
                    }
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute h-full min-w-full flex items-center justify-between">
        <div
          className="h-full bg-transparent text-3xl flex items-center px-3 text-gray-100 cursor-pointer left-0"
          onClick={() => goTo(position - 1)}
        >
          <i className="fas fa-chevron-left" />{" "}
        </div>
        <div
          className="h-full bg-transparent text-3xl flex items-center px-3 text-gray-100 cursor-pointer right-0 "
          onClick={() => goTo(position + 1)}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
