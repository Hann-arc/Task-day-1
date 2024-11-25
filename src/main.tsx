import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider} from "@chakra-ui/react";
import App from "./App";
import { chakraTheme } from "./libs/chakra-theme";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider  theme={chakraTheme}>
      <App /> 
    </ChakraProvider>
  </StrictMode>
);
