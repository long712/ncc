import React from "react";
import Content from "./conten";
import Footer from "./footer";
import Header from "./header";

const Container = () => {
  return (
    <div style={{ width: "100%", height: "1007px" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Container;
