import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CarouselContextProvider } from "./context/carouselImage";
import { LanguageContextProvider } from "./context/languageContext";
import "./index.css";
import { Routes } from "./router/app.routes";

function App() {
  return (
    <LanguageContextProvider>
      <div className="min-w-full min-h-screen bg-gray-200">
        <Header />
        <CarouselContextProvider>
          <Carousel />
          <Routes />
        </CarouselContextProvider>
        <Footer />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
