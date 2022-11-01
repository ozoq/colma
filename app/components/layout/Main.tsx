import { Box, Flex } from "@chakra-ui/react";
import type { HeaderProps } from "./Header";
import Header from "./Header";

export type MainProps = HeaderProps & {
  children: React.ReactNode;
};

export default function Main({ children, userId }: MainProps) {
  return (
    <Flex h="100vh" direction={"column"}>
      {/* TODO: use context */}
      <Header userId={userId} />
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
