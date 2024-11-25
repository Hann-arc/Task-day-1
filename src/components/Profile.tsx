import { Box, Button, Image } from "@chakra-ui/react";
import * as React from "react";

import {
    masaAnakAnak,
    masaDewasaMuda,
    masaDewasaProduktif,
    masaPraPensiun,
    masaRemaja,
} from "../assets/index";

interface ProfileProps {
  age: number;
  setAge: (age: number) => void;
}

export const Profile: React.FC<ProfileProps> = ({ age, setAge }) => {
  const [image, setImage] = React.useState<string>(masaRemaja);

  const handleIncreaseAge = () => {
    setAge(age + 1);
  };

  const handleDecreaseAge = () => {
    if (age > 1) {
      setAge(age - 1);
    }
  };
  const handleResetAge = () => {
    setAge(19);
  };

  React.useEffect(() => {
    if (age >= 1 && age <= 10) {
      setImage(masaAnakAnak);
    } else if (age > 10 && age <= 19) {
      setImage(masaRemaja);
    } else if (age > 19 && age <= 30) {
      setImage(masaDewasaMuda);
    } else if (age > 30 && age <= 50) {
      setImage(masaDewasaProduktif);
    } else {
      setImage(masaPraPensiun);
    }
  }, [age]);
  return (
    <>
      <Image
        marginY={"50px"}
        src={image}
        alt="Profile"
        borderRadius="full"
        boxSize="350px"
      />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"row"} gap={4}>
          <Button onClick={handleIncreaseAge}>Age + 1</Button>
          <Button onClick={handleDecreaseAge}>Age - 1</Button>
        </Box>
        <Button
          onClick={handleResetAge}
          paddingX={"-10px"}
          width="50%"
          maxWidth={"200px"}
          marginTop={4}
        >
          Reset
        </Button>
      </Box>
    </>
  );
};
