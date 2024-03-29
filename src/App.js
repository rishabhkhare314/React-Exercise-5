import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@elastic/eui/dist/eui_theme_light.css";
import Main from "./components/Exercise5/Main";
import { EuiLoadingElastic } from "@elastic/eui";
import { EuiLoadingSpinner } from "@elastic/eui";

// import Grid from "./components/Grid";
// import Test from "./components/Test";
// import Style from "./components/Style";
// import PopOver from "./components/PopOver";
// import Practice from "./components/Practice";
// import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <br /> <br /> <br />
       <EuiLoadingSpinner size="xl" />
       <EuiLoadingElastic size="xl" />
      <Main />
         {/* <Test /> */}
      {/* <FontContext.Provider value="bold"> */}
      {/* <Style /> */}
      {/* </FontContext.Provider> */}
      {/* <Grid /> */}
   
      {/* <Practice /> */}
      {/* <PopOver /> */}
      {/* <MainFile /> */}
      {/* <MainFile /> */}
    </div>
  );
}

export default App;
