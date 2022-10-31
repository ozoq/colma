import type { BoxProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
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
    <Box m={2} width="48" {...props}>
      <CollectionImageLinked collection={props.collection} height="28" />
      <Flex gap={2} justifyContent="space-between" alignItems="end" p={2}>
        <Stack>
          <Text fontSize="md" fontWeight={"medium"}>
            <Link to={generateCollectionUrl(id)}>{name}</Link>
          </Text>
          <Text fontSize="sm" color="blackAlpha.700">
            By{" "}
            <Link fontWeight="medium" to={generateUserUrl(author.id)}>
              {author.username}
            </Link>
          </Text>
        </Stack>
        <Link to={generateUserUrl(author.id)}>
          <Avatar size="sm" />
        </Link>
      </Flex>
    </Box>
  );
}
