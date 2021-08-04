import React from "react";
import {
  HStack,
  VStack,
  StackDivider,
  Spacer,
  Text,
  IconButton,
  Badge,
  Tooltip,
} from "@chakra-ui/react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

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
            <Tooltip
              label="Edit task"
              fontSize="sm"
              placement="top"
              openDelay={500}
            >
              <IconButton
                icon={<FaRegEdit />}
                colorScheme="yellow"
                isRound="true"
                onClick={() => deleteItem(item.id)}
              />
            </Tooltip>
            <Tooltip
              label="Delete task"
              fontSize="sm"
              placement="top"
              openDelay={500}
            >
              <IconButton
                icon={<FaTrashAlt />}
                colorScheme="red"
                isRound="true"
                onClick={() => deleteItem(item.id)}
              />
            </Tooltip>
          </HStack>
        );
      })}
    </VStack>
  );
}

export default TodoList;
