import { Tooltip, IconButton } from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";

const EditButton = ({ item, handleOpenEdit }) => {
  return (
    <Tooltip label="Edit task" fontSize="sm" placement="top" openDelay={1000}>
      <IconButton
        icon={<FaRegEdit />}
        colorScheme="yellow"
        isRound="true"
        onClick={() => handleOpenEdit(item)}
      />
    </Tooltip>
  );
};

export default EditButton;
