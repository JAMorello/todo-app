import { useState, useEffect } from "react";
import {
  HStack,
  VStack,
  StackDivider,
  Spacer,
  Text,
  IconButton,
  Button,
  Badge,
  Tooltip,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

function TodoList({ todoList, deleteItem, editItem, colorMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentItem, setCurrentItem] = useState({});
  const [color, setColor] = useState("");
  const alert = useToast();

  useEffect(() => {
    switch (currentItem.category) {
      case "House":
        setColor("gray.500");
        break;
      case "Work":
        setColor("red.500");
        break;
      case "Family":
        setColor("orange.500");
        break;
      case "Sports":
        setColor("blue.500");
        break;
      case "Studies":
        setColor("green.500");
        break;
      default:
        setColor("");
    }
  }, [currentItem]);

  const handleOpenEdit = (item) => {
    setCurrentItem(item);
    onOpen();
  };

  const handleEditTask = (e) => {
    setCurrentItem({ ...currentItem, task: e.target.value });
  };

  const handleEditCategory = (e) => {
    setCurrentItem({ ...currentItem, category: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (currentItem.task === "") {
      alert({
        title: "Task description missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const editedItem = { ...currentItem, colorCat: color };
    editItem(editedItem);
    onClose();
  };

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
              openDelay={1000}
            >
              <IconButton
                icon={<FaRegEdit />}
                colorScheme="yellow"
                isRound="true"
                onClick={() => handleOpenEdit(item)}
              />
            </Tooltip>

            <Tooltip
              label="Delete task"
              fontSize="sm"
              placement="top"
              openDelay={1000}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input
                bg={colorMode === "light" ? "red.50" : "teal.700"}
                borderColor={colorMode === "light" ? "red.100" : "teal.500"}
                variant="filled"
                placeholder="Describe task here..."
                type="text"
                value={currentItem.task}
                onChange={handleEditTask}
              />
              <Select
                bg={colorMode === "light" ? "red.200" : "teal.900"}
                borderColor={colorMode === "light" ? "red.300" : "teal.500"}
                placeholder="Select category"
                value={currentItem.category}
                onChange={handleEditCategory}
              >
                <option value="House">House</option>
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Sports">Sports</option>
                <option value="Studies">Studies</option>
              </Select>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={handleEditSubmit}>
              Edit
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default TodoList;
