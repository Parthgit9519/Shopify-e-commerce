import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllReactRouters from "./Components/AllReactRouters";

const App = () => {
  return (
    <BrowserRouter >
      <AllReactRouters />
    </BrowserRouter>
  );
};

export default App;
