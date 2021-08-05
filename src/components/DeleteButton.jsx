import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const DeleteButton = ({ item, deleteTask }) => {
  return (
    <Tooltip label="Delete task" fontSize="sm" placement="top" openDelay={1000}>
      <IconButton
        icon={<FaTrashAlt />}
        colorScheme="red"
        isRound="true"
        onClick={() => deleteTask(item.id)}
      />
    </Tooltip>
  );
};

export default DeleteButton;
