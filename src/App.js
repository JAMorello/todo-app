import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { VStack, useColorMode } from "@chakra-ui/react";

const App = () => {
  // React Hook to know what mode is current and to toogle it
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={3}>
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <AppBody colorMode={colorMode} />
    </VStack>
  );
};

export default App;
