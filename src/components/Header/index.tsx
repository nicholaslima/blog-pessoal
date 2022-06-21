import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFillSunFill } from "react-icons/bs";

export const Header: React.FC = () => {
  return (
    <Box bg="green.medium" py={["5px", "10px", "25px", "25px"]}>
      <Flex
        align="center"
        mx="auto"
        px="1rem"
        flexDirection="row"
        justify="space-between"
        w="100%"
        maxWidth="950px"
      >
        <Flex align="center" gap="2.625rem">
          <Text
            fontWeight="700"
            fontSize={["7px", "12px", "14xp", "18px", "20px"]}
          >
            Sobre
          </Text>
          <Text
            fontWeight="700"
            fontSize={["7px", "12px", "14xp", "18px", "20px"]}
          >
            Blog
          </Text>
          <Text
            fontWeight="700"
            fontSize={["7px", "12px", "14xp", "18px", "20px"]}
            color="green.light"
          >
            Projetos
          </Text>
        </Flex>
        <Icon
          as={BsFillSunFill}
          color="white"
          height={["8px", "14px", "16px", "20px"]}
        />
      </Flex>
    </Box>
  );
};
