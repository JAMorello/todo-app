import React from "react";
import {
  HStack,
  VStack,
  Heading,
  IconButton,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearFill } from "react-icons/ri";

const Header = ({ colorMode, toggleColorMode }) => {
  return (
    <VStack w="100%">
      <HStack w="50%" p={2}>
        <Spacer />
        <Heading size="2xl" alignSelf="center">
          To-do List
        </Heading>
        <Spacer />
        <IconButton
          icon={colorMode === "light" ? <FiSun /> : <RiMoonClearFill />}
          size="lg"
          isRound="true"
          aria-label="Switch ligh/night mode"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Header;
