import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CollectionCard from "~/components/collection/CollectionCard";
import ItemCard from "~/components/item/ItemCard";
import { getLargestCollections } from "~/models/collection.server";
import { getRecentItems } from "~/models/item.server";

export async function loader() {
  return json({
    largestCollections: await getLargestCollections(),
    recentItems: await getRecentItems(),
  });
}

export default function Index() {
  const { largestCollections, recentItems } = useLoaderData<typeof loader>();

  return (
    <Box>
      {/* Block one */}
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

      {/* Block two */}
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

      {/* Block three */}
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
