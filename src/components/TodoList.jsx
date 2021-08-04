import React from "react";
import {
  HStack,
  VStack,
  StackDivider,
  Spacer,
  Text,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

function TodoList({ todoList, deleteItem }) {
  if (!todoList.length) {
    return (
      <Badge colorScheme="green" p={4} m={4}>
        No task to show
      </Badge>
    );
  }

  return (
    <VStack
      shadow="md"
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
            <Text w="70%">{item.task}</Text>
            <Spacer />
            {item.category ? (
              <Text color={item.colorCat} fontWeight="bold">
                {item.category}
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
