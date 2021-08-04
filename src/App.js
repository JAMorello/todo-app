import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { VStack, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={3}>
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <AppBody colorMode={colorMode} />
    </VStack>
  );
}

export default App;
