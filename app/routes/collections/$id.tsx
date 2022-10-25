import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import Item from "~/components/Item";
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
  tags: ["sci-fi", "Cool Books", "Really Interesting"],
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

const CollectionInfo = () => (
  <Box
    borderBottom="1px"
    borderTop="1px"
    borderColor={"gray.100"}
    py={4}
    mb={4}
  >
    <Text px={8}>{collection.description}</Text>
  </Box>
);

const CollectionItem = () => (
  <Flex
    width={400}
    boxShadow="xs"
    borderRadius="lg"
    m={4}
    p={2}
    flexDirection="column"
    justifyContent="space-between"
  >
    <Flex gap={2} mb={2} flexWrap="wrap">
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
    <Flex justifyContent="space-between" alignItems="end">
      <Flex gap={2} flexWrap="wrap">
        <Tag colorScheme={"red"}>{item.likesAmount} likes</Tag>
        <Tag colorScheme={"blue"}>{item.commentsAmount} comments</Tag>
      </Flex>
      <Button size="md" variant="ghost">
        Open
      </Button>
    </Flex>
  </Flex>
);

export default function CollectionPage() {
  return (
    <Box>
      <Heading mb={4}>{collection.name}</Heading>
      <CollectionImage />
      <CollectionInfo />
      <Flex justifyContent={"center"} flexWrap="wrap">
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
        <CollectionItem />
      </Flex>
    </Box>
  );
}
