import React, { createContext, useState, useContext } from "react";

const CarouselImageContext = createContext();

export const useCarouselContext = () => {
  const d = useContext(CarouselImageContext);
  if (!d) throw new Error("error");
  return d;
};
export const CarouselContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  // const updateImage
  return (
    <CarouselImageContext.Provider value={{ images, setImages }}>
      {children}
    </CarouselImageContext.Provider>
  );
};
