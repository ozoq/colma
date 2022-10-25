import { Avatar, Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import Link from "./Link";

export default function Collection({
  id,
  category,
  itemsAmount,
  author,
  name,
  imageSrc,
}) {
  return (
    <Box m={2} width={250}>
      <Link to={`/collections/${id}`}>
        <Box height={180} sx={{ position: "relative" }}>
          <Image
            height="100%"
            width="100%"
            borderRadius={"xl"}
            src={imageSrc}
          />
          <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
            <Tag>{category}</Tag>
            <Tag>{itemsAmount} items</Tag>
          </Flex>
        </Box>
      </Link>
      <Flex alignItems={"center"} gap={2} justifyContent="space-between" p={2}>
        <Box>
          <Text fontSize="lg" fontWeight={"medium"}>
            <Link to={`/collections/${id}`}>{name}</Link>
          </Text>
          <Text fontSize="sm">
            By <Link to={`/users/${author.id}`}>{author.name}</Link>
          </Text>
        </Box>
        <Link to={`/users/${author.id}`}>
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
