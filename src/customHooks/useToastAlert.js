import { useToast } from "@chakra-ui/react";

const useToastAlert = () => {
  // Create a pop up alert
  const alert = useToast();

  // If the user did not entered a string for the taks, throw a pop up alert and do nothing else
  const checkTask = (task) => {
    let thrownAlert = false;
    if (!task || task.task === "") {
      alert({
        title: "Task description missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return (thrownAlert = true);
    }
    return thrownAlert;
  };

  return checkTask;
};

export default useToastAlert;
