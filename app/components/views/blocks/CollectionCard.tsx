import type { BoxProps } from "@chakra-ui/react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import CollectionImageLinked from "~/components/elements/collection/CollectionImageLinked";
import Link from "~/components/elements/shared/Link";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import { generateCollectionUrl, generateUserUrl } from "~/utils/URLs";

export type CollectionCardProps = BoxProps & {
  collection: BasicCollectionType;
};

export default function CollectionCard(props: CollectionCardProps) {
  const { id, name, author } = props.collection;
  return (
    <Box m={2} width={250} {...props}>
      <CollectionImageLinked collection={props.collection} />
      <Flex alignItems={"center"} gap={2} justifyContent="space-between" p={2}>
        <Box>
          <Text fontSize="lg" fontWeight={"medium"}>
            <Link to={generateCollectionUrl(id)}>{name}</Link>
          </Text>
          <Text fontSize="sm">
            By <Link to={generateUserUrl(author.id)}>{author.username}</Link>
          </Text>
        </Box>
        <Link to={generateUserUrl(author.id)}>
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
