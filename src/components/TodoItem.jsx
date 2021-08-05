import { HStack, Text, Spacer } from "@chakra-ui/react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ item, handleOpenEdit, deleteTask }) => {
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
      <EditButton item={item} handleOpenEdit={handleOpenEdit} />
      <DeleteButton item={item} deleteTask={deleteTask} />
    </HStack>
  );
};

export default TodoItem;
