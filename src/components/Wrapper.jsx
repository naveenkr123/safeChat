import React from "react";
import Header from "./Header";

function Wrapper({ children }) {
  return (
    <div className="container-lg site_wrapper">
      <Header />
      <div className="main">{children}</div>
    </div>
  );
}

export default Wrapper;
