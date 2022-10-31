import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";

export type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <Flex h="100vh" direction={"column"}>
      <Header />
      <Box
        py={12}
        mx={{ base: "4", md: "12" }}
        maxW={1500}
        flex={1}
        alignSelf="center"
      >
        {children}
      </Box>
    </Flex>
  );
}
