import React from "react";
import Menu from "../Components/Menu";
import Header from "../Components/Header";
import Feature from "../Components/Feature";
import Feature2 from "../Components/Feature2";
import Apply from "../Components/Apply";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <>
      <Menu />
      <Header />
      <Feature type="launch" />
      <Feature2 type="design" />
      <Feature type="train" />
      <Feature2 type="migrate" />
      <Apply />
      <Footer />
    </>
  );
};
export default MainPage;
