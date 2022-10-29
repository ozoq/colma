import type { BoxProps } from "@chakra-ui/react";
import { Box, Flex, Image, Tag } from "@chakra-ui/react";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";

export type CollectionImageProps = BoxProps & {
  collection: Pick<BasicCollectionType, "imageUrl" | "itemsCount" | "topic">;
};

export default function CollectionImage(props: CollectionImageProps) {
  const { imageUrl, topic, itemsCount } = props.collection;
  return (
    <Box sx={{ position: "relative" }} {...props}>
      <Image
        height="100%"
        width="100%"
        fit="cover"
        borderRadius={"xl"}
        src={imageUrl}
      />
      <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
        <Tag>{topic}</Tag>
        <Tag>{itemsCount} items</Tag>
      </Flex>
    </Box>
  );
}
