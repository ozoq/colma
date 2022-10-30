import type { FlexProps } from "@chakra-ui/react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import CollectionImageLinked from "~/components/elements/collection/CollectionImageLinked";
import Link from "~/components/elements/shared/Link";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import { generateCollectionUrl, generateUserUrl } from "~/utils/URLs";

export type CollectionPieceProps = FlexProps & {
  collection: BasicCollectionType;
};

export default function CollectionPiece(props: CollectionPieceProps) {
  const { collection } = props;
  const { name, authorName, authorId, id } = collection;
  return (
    <Flex gap={4} {...props}>
      <CollectionImageLinked collection={collection} height={180} width={200} />
      <Flex direction="column" justifyContent="space-between">
        <Text fontSize="lg" fontWeight={"medium"}>
          <Link to={generateCollectionUrl(id)}>{name}</Link>
        </Text>
        <Flex alignItems={"end"} gap={4}>
          <Text fontSize="sm">
            {`Collection by `}
            <Link to={generateUserUrl(authorId)} fontWeight="medium">
              {authorName}
            </Link>
          </Text>
          <Link to={generateUserUrl(authorId)}>
            <Avatar size="sm" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
