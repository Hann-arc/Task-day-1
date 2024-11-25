import { Box } from "@chakra-ui/react";
import React from "react";
import { Home } from "../layouts/home";

export function HomeRoute() {
  return (
    <Box bg="black" color={"white"} minHeight="100vh">
      <Home />
    </Box>
  );
}
