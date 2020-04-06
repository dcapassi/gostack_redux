import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/Global";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";
import store from "./store";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
