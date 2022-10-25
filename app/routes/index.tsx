import { Box, Flex, Heading } from "@chakra-ui/react";
import Collection from "~/components/Collection";

export default function Index() {
  return (
    <Box>
      <Heading mb={5} textAlign="center" size="lg">
        Explore Our Largest Collections
      </Heading>
      <Flex justifyContent={"center"} flexWrap="wrap">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </Flex>
    </Box>
  );
}
