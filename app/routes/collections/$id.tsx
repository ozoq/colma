import { Box, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";
import CollectionDescription from "~/components/collection/CollectionDescription";
import CollectionImage from "~/components/collection/CollectionImage";
import ItemCard from "~/components/item/ItemCard";
import type { CollectionType } from "~/lib/data";
import data from "~/lib/data";

export default function CollectionPage() {
  const params = useParams();

  const collection = data
    .reduce(
      (collections, user) => [...collections, ...user.collections],
      [] as CollectionType[]
    )
    .find((collection) => collection.id === Number(params.id));

  if (!collection) return "Not found";

  return (
    <Box>
      <Heading mb={4}>{collection.name}</Heading>
      <CollectionImage collection={collection} height={300} mb={6} />
      <CollectionDescription collection={collection} mb={6} />
      <Flex justifyContent={"center"} flexWrap="wrap">
        {collection.items.map((item) => (
          <ItemCard key={item.id} item={item} m={4} />
        ))}
      </Flex>
    </Box>
  );
}
