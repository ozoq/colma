import { Avatar, Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import Link from "./Link";

export default function Collection() {
  return (
    <Box m={2} width={250}>
      <Link to="/2">
        <Box sx={{ position: "relative" }}>
          <Image height={180} borderRadius={"xl"} src="/collection.webp" />
          <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
            <Tag>books</Tag>
            <Tag>43 items</Tag>
          </Flex>
        </Box>
      </Link>
      <Flex alignItems={"center"} gap={2} justifyContent="space-between" p={2}>
        <Box>
          <Text fontSize="lg" fontWeight={"medium"}>
            <Link to="/2">My sci-fi books</Link>
          </Text>
          <Text fontSize="sm">
            By <Link to="/1">john1997</Link>
          </Text>
        </Box>
        <Link to="/1">
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
