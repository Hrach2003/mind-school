import React, { createContext, useState, useContext } from "react";

const CarouselImageContext = createContext();

export const useCarouselContext = () => {
  const d = useContext(CarouselImageContext);
  if (!d) throw new Error("error");
  return d;
};
// eslint-disable-next-line react/prop-types
export const CarouselContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  return (
    <CarouselImageContext.Provider value={{ images, setImages }}>
      {children}
    </CarouselImageContext.Provider>
  );
};
