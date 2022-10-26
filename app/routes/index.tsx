import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CollectionCard from "~/components/collection/CollectionCard";
import ItemCard from "~/components/item/ItemCard";
import type { CollectionType, ItemType } from "~/lib/data";
import data from "~/lib/data";

const largestCollections = data
  .reduce(
    (collections, user) => [...collections, ...user.collections],
    [] as CollectionType[]
  )
  .sort((a, b) => a.items.length - b.items.length)
  .slice(0, 5);

const recentItems = data
  .reduce(
    (collections, user) => [...collections, ...user.collections],
    [] as CollectionType[]
  )
  .reduce(
    (items, collection) => [...items, ...collection.items],
    [] as ItemType[]
  )
  .sort(() => 0.5 - Math.random())
  .slice(0, 5);

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
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </Flex>
      </Box>

      <Box>
        <Heading mb={5} textAlign="center" size="lg">
          Most recent items
        </Heading>
        <Flex
          justifyContent={"center"}
          flexWrap="wrap"
          gap={4}
          alignItems="start"
        >
          {recentItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
