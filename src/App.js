import Header from "./components/Header";
import AppBody from "./components/AppBody";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack p={3}>
      <Header />
      <AppBody />
    </VStack>
  );
}

export default App;
