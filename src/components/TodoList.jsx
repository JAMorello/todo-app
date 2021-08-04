import React from "react";
import {
  HStack,
  VStack,
  StackDivider,
  Divider,
  Spacer,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

function TodoList({ todoList, deleteItem }) {
  return (
    <VStack
      divider={<StackDivider />}
      w="100%"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={3}
    >
      {todoList.map((item) => {
        return (
          <HStack key={item.id} w="100%">
            <Text w="50%">{item.task}</Text>
            <Spacer />
            {item.category ? (
              <Text color="blue" fontWeight="bold">
                {item.category}{" "}
              </Text>
            ) : (
              ""
            )}
            <Spacer />
            <IconButton
              icon={<FaTrashAlt />}
              isRound="true"
              onClick={() => deleteItem(item.id)}
            />
          </HStack>
        );
      })}
    </VStack>
  );
}

export default TodoList;
