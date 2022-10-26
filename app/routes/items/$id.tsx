import { Box, Button, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import Collection from "~/components/Collection";
import Link from "~/components/Link";

const collection = {
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
  description:
    "Suspendisse vitae elit nec ipsum porta iaculis id vitae turpis. In hac habitasse platea dictumst. In ornare, massa accumsan mollis ullamcorper, augue quam imperdiet elit, sit amet vulputate leo dui vel orci. Suspendisse sed est sed ipsum condimentum rutrum nec eu nunc. Maecenas tempor velit sed turpis rhoncus, dapibus commodo mi faucibus. Curabitur aliquet hendrerit elit, nec fringilla orci ultricies eu. Nam nunc leo, vehicula quis risus eu, aliquam iaculis lectus. Quisque enim lectus, pulvinar id est ut, volutpat molestie eros. Aliquam erat volutpat. Suspendisse massa mi, imperdiet ut luctus vel, hendrerit non urna. Aenean nec leo lectus. Sed lobortis sem et iaculis elementum. Fusce augue ligula, dignissim finibus sem et, hendrerit semper dolor. Praesent ut hendrerit sapien. Sed consectetur mattis tortor sed aliquam.",
};

const item = {
  name: "The time machine",
  likesAmount: 543,
  commentsAmount: 15,
  tags: [
    "sci-fi",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
    "Cool Books",
    "Really Interesting",
  ],
  fields: {
    Author: "John Doe",
    Date: "04/03/1955",
    Pages: 544,
  },
};

const CollectionImage = () => (
  <Box height={300} sx={{ position: "relative" }} mb={4}>
    <Image
      height="100%"
      width="100%"
      fit="cover"
      borderRadius={"xl"}
      src={collection.imageSrc}
    />
    <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
      <Tag>{collection.category}</Tag>
      <Tag>{collection.itemsAmount} items</Tag>
    </Flex>
  </Box>
);

const CollectionItem = () => (
  <Flex flex={1} flexDirection="column" justifyContent="space-between" p={4}>
    <Flex gap={2} flexWrap="wrap">
      {item.tags.map((tag) => (
        <Link key={tag} to={`/search?byTag=${tag}`}>
          <Tag colorScheme={"cyan"}>{tag}</Tag>
        </Link>
      ))}
    </Flex>
    <Box flex={1} my={2} p={2}>
      <Heading size="md" mb={3}>
        The time machine
      </Heading>
      {Object.entries(item.fields).map(([fieldName, fieldValue]) => (
        <Flex key={fieldName} gap={2} mb={2}>
          <Tag>{fieldName}</Tag>
          <Text>{fieldValue}</Text>
        </Flex>
      ))}
    </Box>
    <Flex gap={2} ml="auto">
      <Tag colorScheme={"red"} whiteSpace="nowrap">
        {item.likesAmount} likes
      </Tag>
      <Tag colorScheme={"blue"} whiteSpace="nowrap">
        {item.commentsAmount} comments
      </Tag>
    </Flex>
  </Flex>
);

export default function ItemPage() {
  return (
    <Box>
      <Heading mb={4}>{item.name}</Heading>
      <Flex shadow="base" borderRadius="lg" flexWrap="wrap">
        <Collection {...collection} />
        <CollectionItem />
      </Flex>
      <Box></Box>
    </Box>
  );
}
