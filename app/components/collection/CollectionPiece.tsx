import type { FlexProps } from "@chakra-ui/react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import { generateCollectionUrl, generateUserUrl } from "~/utils/URLs";
import Link from "../common/Link";
import CollectionImage from "./CollectionImage";

export type CollectionPieceProps = FlexProps & {
  collection: BasicCollectionType;
};

export default function CollectionPiece(props: CollectionPieceProps) {
  const { collection } = props;
  const { name, author, id } = collection;
  return (
    <Flex gap={4} {...props}>
      <CollectionImage collection={collection} height={180} width={200} />
      <Flex direction="column" justifyContent="space-between">
        <Text fontSize="lg" fontWeight={"medium"}>
          <Link to={generateCollectionUrl(id)}>{name}</Link>
        </Text>
        <Flex alignItems={"end"} gap={4}>
          <Text fontSize="sm">
            {`Collection by `}
            <Link to={generateUserUrl(author.id)} fontWeight="medium">
              {author.username}
            </Link>
          </Text>
          <Link to={generateUserUrl(author.id)}>
            <Avatar size="sm" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
