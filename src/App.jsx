import React from "react";
import FormComponent from "./FormComponent";
// import Slider from "./Slider";
import Sidebar from "./Sidebar";
import AnimatedBarChart from "./components/AnimatedBarChart";
import "./App.css";
import Accordion from "./components/Accordion";
import StickyElement from "./components/StickyElement";
import Scroll from "./components/Scroll";
import Example from "./components/StickyElement";
import MovingAnimation from "./components/MovingAnimation";
import StickyImageSlidingContent from "./StickyImageSlidingContent";
import NewPatientForm from "./TrtpepPatientForm/NewPatientForm";
import Products from "./customHook/Products";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./customHook/ProductDetails";
import UseRefHook from "./hooks/UseRefHook";
import Modal from "./hooks/UseRefWithModal";
import GsapTutorial from "./gsap-tutorial/GsapTutorial";
import CountryAnimation from "./countryAnimation/CountryAnimation";
import ParallexSections from "./parallexSections/ParallexSections";
import ScrollOpacityText from "./scrollOpacityText/ScrollOpacityText";
import CardsParallex from "./cardsParallex/CardsParallex";
import Slider from "./heroMobileMockupsSlider/Slider";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Modal />} />
      <Route path="/country-animation" element={<CountryAnimation />} />
      <Route path="/gsap-tutorial" element={<GsapTutorial />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/parallex-animation" element={<ParallexSections />} />
      <Route path="/scroll-opacity" element={<ScrollOpacityText />} />
      <Route path="/cards-parallex" element={<CardsParallex />} />
      <Route path="/slider" element={<Slider />} />
    </Routes>
  );
};

export default App;
