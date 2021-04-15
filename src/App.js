import React from "react";
import "./assets/css/custom.css";
import routers from "./routers";
import renderRouters from "./core/routerConfig";
import AppProvider from "./core/AppProvider";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
//import store from "./redux/store";

function App() {
  return (
    <AppProvider reducers={reducers}>
      <Provider reducers={reducers}>{renderRouters(routers)}</Provider>
    </AppProvider>
  );
}

export default App;
