import { Router } from "@reach/router";
import Demoslide from "./Components/demopage/demo";
import React from "react";
import Dishfn from "./Components/dishpage/dish";
import Rmain from "./Components/restmain/remain";
import Checkout from "./Components/cart/carts";
import Headers from "./Components/header/header";


function App() {
  return (
    <div>
    <Headers/>
    <Router>
      <Demos path="/"></Demos>
      <Dishes path="/dishes"></Dishes>
      <Rdetails path="/details"></Rdetails>
      <Cartdetails path="/cart"></Cartdetails>
    </Router></div>
  );
}
const Demos = () => {
  return <Demoslide />;
};
const Dishes = () => {
  return <Dishfn />;
};
const Rdetails = () => {
  return <Rmain />;
};
const Cartdetails = () => {
  return <Checkout />;
};

export default App;
