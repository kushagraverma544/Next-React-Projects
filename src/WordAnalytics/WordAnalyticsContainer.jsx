import React from "react";
import HeaderComponent from "./header/HeaderComponent";
import AnalysisContainer from "./AnalysisContainer/AnalysisContainer";
import FooterComponent from "./footer/FooterComponent";
import "./index.css";
const WordAnalyticsContainer = () => {
  return (
    <>
      <HeaderComponent />
      <AnalysisContainer />
      <FooterComponent />
    </>
  );
};

export default WordAnalyticsContainer;
