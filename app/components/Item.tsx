import {
  Box,
  Flex,
  Image,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "./Link";

export default function Item() {
  return (
    <Box
      border={"1px"}
      borderColor="gray.100"
      borderRadius={"lg"}
      m={2}
      p={3}
      bgColor="gray.50"
      width={250}
    >
      <Flex gap={2} mb={2} flexWrap="wrap">
        <Tag colorScheme={"red"}>546 likes</Tag>
        <Tag colorScheme={"blue"}>43 comments</Tag>
        <Link to="/4">
          <Tag colorScheme={"teal"}>sci-fi</Tag>
        </Link>
        <Link to="/4">
          <Tag colorScheme={"red"}>old</Tag>
        </Link>
        <Link to="/4">
          <Tag colorScheme={"green"}>newer</Tag>
        </Link>
        <Link to="/4">
          <Tag colorScheme={"yellow"}>best</Tag>
        </Link>
        <Link to="/4">
          <Tag colorScheme={"cyan"}>interesting</Tag>
        </Link>
      </Flex>
      <Link to="/3">
        <Box mb={2}>
          <Text fontSize="lg" fontWeight={"medium"}>
            The time machine
          </Text>
          <UnorderedList>
            <ListItem>Author: John Doe</ListItem>
            <ListItem>Date: 07/03/1955</ListItem>
            <ListItem>Pages: 433</ListItem>
          </UnorderedList>
        </Box>
      </Link>
      <Box>
        <Text fontSize="sm" fontWeight="medium">
          From collection:
        </Text>
        <Flex alignItems={"center"} gap={2} mb={2}>
          <Link to="/2">
            <Image boxSize={50} borderRadius={"xl"} src="/collection.webp" />
          </Link>
          <Box>
            <Text fontSize="lg" fontWeight={"medium"}>
              <Link to="/2">My sci-fi books</Link>
            </Text>
            <Text fontSize="sm">
              By <Link to="/1">john1997</Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
