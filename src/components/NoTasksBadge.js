import { Badge } from "@chakra-ui/react";

const NoTasksBadge = () => {
  return (
    <Badge colorScheme="green" p={4} m={4}>
      No task to show
    </Badge>
  );
};

export default NoTasksBadge;
