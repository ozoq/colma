import { Box } from "@chakra-ui/react";
import Header from "./Header";

export type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <Box h="100vh">
      <Header />
      <Box
        py={12}
        px={{ base: "4", md: "12" }}
        mx="auto"
        maxW={1500}
        flex={1}
        alignSelf="center"
      >
        {children}
      </Box>
    </Box>
  );
}
