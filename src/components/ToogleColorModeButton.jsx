import { IconButton } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { RiMoonClearFill } from "react-icons/ri";

const ToogleColorModeButton = ({ colorMode, toggleColorMode }) => {
  return (
    <IconButton
      icon={colorMode === "light" ? <FiSun /> : <RiMoonClearFill />}
      size="lg"
      isRound="true"
      aria-label="Switch ligh/night mode"
      alignSelf="flex-end"
      onClick={toggleColorMode}
    />
  );
};

export default ToogleColorModeButton;
