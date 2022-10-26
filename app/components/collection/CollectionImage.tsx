import type { BoxProps } from "@chakra-ui/react";
import { Box, Flex, Image, Tag } from "@chakra-ui/react";
import type { CollectionType } from "~/lib/data";

export type CollectionImageProps = BoxProps & {
  collection: CollectionType;
};

export default function CollectionImage(props: CollectionImageProps) {
  const { imageSrc, category } = props.collection;
  const itemsAmount = props.collection.items.length;
  return (
    <Box sx={{ position: "relative" }} {...props}>
      <Image
        height="100%"
        width="100%"
        fit="cover"
        borderRadius={"xl"}
        src={imageSrc}
      />
      <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
        <Tag>{category}</Tag>
        <Tag>{itemsAmount} items</Tag>
      </Flex>
    </Box>
  );
}
