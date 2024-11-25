import { Box, Text } from "@chakra-ui/react";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Profile } from "./Profile";
import { Link } from "react-router-dom";

export const Main = () => {
  const [age, setAge] = React.useState<number>(19);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      marginTop={"20px"}
      padding={"8"}
      justifyContent={"space-around"}
    >
      <Box
        w={"50%"}
        display={"flex"}
        marginTop={"50px"}
        margin={"50px"}
        flexDirection={"column"}
      >
        <Text as={"h1"} fontSize={"3xl"} fontWeight={"bold"}>
          Muhammad Farhaan
        </Text>
        <Text as={"h2"} fontWeight={"bold"} fontSize={"2xl"}>
          I'm{" "}
          <Text as={"span"} color={"gray"}>
            {age}
          </Text>{" "}
          and i'm a{" "}
          <Text as={"span"} color={"gray"}>
            Fullstack Dev
          </Text>
        </Text>
        <Text my={"50px"}>
          I am an aspiring full-stack programmer with a strong passion for
          learning. I am on a journey to master various technologies, both on
          the front-end and back-end. As I continue to grow my experience, I
          explore different frameworks and tools to build functional and
          user-friendly web applications. I believe every line of code is an
          opportunity to learn, and every challenge is a chance to grow.
          Although I am still in the early stages, I am committed to continuous
          learning and improvement, striving to deliver my best in every project
          I undertake.
        </Text>
        <Box display={"flex"} marginTop={"20px"} gap={"20px"}>
          <Link to="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon cursor={"pointer"} icon={faInstagram} size="xl" />
          </Link>
          <Link to="https://x.com/" target="_blank">
            <FontAwesomeIcon cursor={"pointer"} icon={faTwitter} size="xl" />
          </Link>
          <Link to="https://web.facebook.com/" target="_blank">
            <FontAwesomeIcon cursor={"pointer"} icon={faFacebookF} size="xl" />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <FontAwesomeIcon cursor={"pointer"} icon={faLinkedinIn} size="xl" />
          </Link>
          <Link to="https://github.com/" target="_blank">
            <FontAwesomeIcon cursor={"pointer"} icon={faGithub} size="xl" />
          </Link>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={"column"}
        w={"40%"}
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <Profile age={age} setAge={setAge} />
      </Box>
    </Box>
  );
};
