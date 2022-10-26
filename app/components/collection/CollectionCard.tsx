import type { BoxProps } from "@chakra-ui/react";
import { Avatar, Box, Flex, Image, Tag, Text } from "@chakra-ui/react";
import type { CollectionType } from "~/lib/data";
import Link from "../Link";
import CollectionImage from "./CollectionImage";

export type CollectionCardProps = BoxProps & {
  collection: CollectionType;
};

const generateUserUrl = (userId: number) => `/users/${userId}`;

const generateCollectionUrl = (collectionId: number) =>
  `/collections/${collectionId}`;

export default function CollectionCard(props: CollectionCardProps) {
  const { id, name, author } = props.collection;
  return (
    <Box m={2} width={250}>
      <Link to={generateCollectionUrl(id)}>
        <CollectionImage height={180} collection={props.collection} />
      </Link>
      <Flex alignItems={"center"} gap={2} justifyContent="space-between" p={2}>
        <Box>
          <Text fontSize="lg" fontWeight={"medium"}>
            <Link to={generateCollectionUrl(id)}>{name}</Link>
          </Text>
          <Text fontSize="sm">
            By <Link to={generateUserUrl(author.id)}>{author.name}</Link>
          </Text>
        </Box>
        <Link to={generateUserUrl(author.id)}>
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
