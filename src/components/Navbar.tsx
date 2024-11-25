import { Box, Text, Image, Button } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { Logo } from "../assets/index";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" padding="6">
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        gap="10px"
      >
        <Image w="30px" borderRadius={"15px"} src={Logo} />
        <Text as={"h1"} fontWeight={"bold"}>
          Kyoo
        </Text>
      </Box>
      <Box display={"flex"} gap={"10px"}>
        <Box
          display="flex"
          color={"gray"}
          backgroundColor={"#222222"}
          borderRadius={"7px"}
          alignItems="center"
          padding={"-2px"}
          paddingLeft={"5"}
          gap="20px"
        >
          <WarningIcon />
          <Text>Hii There!!</Text>
          <Link to="/sign-in" >
          <Button
            fontSize={"13px"}
            border={"1px"}
            borderColor={"white"}
            backgroundColor={"#1A1A1A"}
            fontWeight={"normal"}
            px={"4"}
            _hover={{ backgroundColor: "white", color: "black" }}
            transition={"0.7s"}
            
          >
            Sign in
          </Button>
          </Link>
        </Box>
        <Link to="/sign-up">
        <Button
          _hover={{ backgroundColor: "#1A1A1A", color: "white" }}
          fontSize={"13px"}
          border={"1px"}
          transition={"0.7s"}
          color={"black"}
          borderColor={"white"}
          backgroundColor={"white"}
          fontWeight={"normal"}
          px={"4"}
        >
          Sign up
        </Button>
        </Link>
      </Box>
      <Link to="/contact">
      <Button
        fontSize={"13px"}
        border={"1px"}
        borderColor={"white"}
        transition={"0.7s"}
        backgroundColor={"#1A1A1A"}
        fontWeight={"normal"}
        px={"4"}
        _hover={{ backgroundColor: "white", color: "black" }}
      >
        Contact Me
      </Button>
      </Link>
    </Box>
  );
};
