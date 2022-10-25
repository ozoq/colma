import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Collection from "~/components/Collection";
import Item from "~/components/Item";

const largestCollections = [
  {
    id: 100,
    category: "books",
    itemsAmount: 43,
    author: {
      name: "john1997",
      id: 200,
    },
    name: "My sci-fi books",
    imageSrc:
      "https://api.time.com/wp-content/uploads/2021/12/Neil-Jamieson-BOOKS.jpg",
  },
  {
    id: 101,
    category: "silverware",
    itemsAmount: 6,
    author: {
      name: "restaurant44",
      id: 201,
    },
    name: "Our kitchen stuff",
    imageSrc:
      "https://www.allrecipes.com/thmb/FcygenkGJWJAMA8FyR1kZ-upM-I=/1777x1333/smart/filters:no_upscale()/flatware-vs-silverware-GettyImages-1163969129-3x2-1-b25ada7504834e098ce10088a57618c2.jpg",
  },
];

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
          {largestCollections.map((collection) => (
            <Collection key={collection.id} {...collection} />
          ))}
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
