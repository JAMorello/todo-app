import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Button,
} from "@chakra-ui/react";
import TaskInput from "./TaskInput";
import SelectCategory from "./SelectCategory";

const ModalEdit = ({
  isOpen,
  onClose,
  currentTask,
  handleEdit,
  handleEditSubmit,
  colorMode,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <TaskInput
              value={currentTask.task}
              handleOnChange={(e) => handleEdit(e, "task")}
              placeholder="Describe task here..."
              colorMode={colorMode}
            />
            <SelectCategory
              placeholder="Select category"
              colorMode={colorMode}
              value={currentTask.category}
              handleOnChange={(e) => handleEdit(e, "category")}
            />
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
  );
};

export default ModalEdit;
