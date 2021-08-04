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

const Header = () => {
  return (
    <VStack w="100%">
      <HStack w="50%" p={2}>
        <Spacer />
        <Heading size="2xl" alignSelf="center">
          To-do List
        </Heading>
        <Spacer />
        <IconButton
          icon={<FiSun />}
          size="lg"
          isRound="true"
          aria-label="Switch ligh/night mode"
          alignSelf="flex-end"
        />
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Header;
