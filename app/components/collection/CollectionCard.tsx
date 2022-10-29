import type { BoxProps } from "@chakra-ui/react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import Link from "../Link";
import CollectionImage from "./CollectionImage";

export type CollectionCardProps = BoxProps & {
  collection: BasicCollectionType;
};

const generateUserUrl = (userId: number) => `/users/${userId}`;

const generateCollectionUrl = (collectionId: number) =>
  `/collections/${collectionId}`;

export default function CollectionCard(props: CollectionCardProps) {
  const { id, name, authorId, authorName } = props.collection;
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
            By <Link to={generateUserUrl(authorId)}>{authorName}</Link>
          </Text>
        </Box>
        <Link to={generateUserUrl(authorId)}>
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
