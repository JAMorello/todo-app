import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

// This is necesary to make the color mode switch functional (ColorModeScript)
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// This is necesary to make the color mode switch functional (ColorModeScript)
const theme = extendTheme({
  config,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
