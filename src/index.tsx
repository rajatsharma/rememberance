import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";
import { store } from "./app/store";
import App from "./App";

const container = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
  container
);
