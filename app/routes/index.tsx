import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Collection from "~/components/Collection";
import Item from "~/components/Item";

export default function Index() {
  return (
    <Box>
      <Box mb={12}>
        <Heading mb={5} textAlign="center" size="md">
          Welcome to Colmanag!
        </Heading>
        <Flex justifyContent={"center"}>
          <Text mb={5} textAlign="center" width={300}>
            With colmanag you can explore collections of other people, and even
            create and share your own collections
          </Text>
        </Flex>
      </Box>
      <Box mb={12}>
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

      <Box>
        <Heading mb={5} textAlign="center" size="lg">
          Most recent items
        </Heading>
        <Flex justifyContent={"center"} flexWrap="wrap">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Flex>
      </Box>
    </Box>
  );
}
