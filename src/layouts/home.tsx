import React from "react";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Box } from "@chakra-ui/react";

export function Home() {
  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
}
