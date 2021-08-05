import React from "react";
import { HStack, VStack, Heading, Divider, Spacer } from "@chakra-ui/react";
import ToogleColorModeButton from "./ToogleColorModeButton";

const Header = ({ colorMode, toggleColorMode }) => {
  return (
    <VStack w="100%">
      <HStack
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", md: "60vw", lg: "50vw", xl: "40vw" }}
        p={2}
      >
        <Spacer />
        <Heading size="2xl" alignSelf="center">
          To-do List
        </Heading>

        <Spacer />
        <ToogleColorModeButton
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      </HStack>

      <Divider />
    </VStack>
  );
};

export default Header;
