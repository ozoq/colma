import type { BoxProps } from "@chakra-ui/react";
import { LightMode } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Flex, Image, Tag } from "@chakra-ui/react";
import React from "react";
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
        border="1px"
        borderColor={useColorModeValue("gray.400", "black")}
        shadow={"md"}
      />
      <Flex sx={{ position: "absolute", top: 2, right: 2 }} gap={2}>
        <SolidTag>{topic}</SolidTag>
        <SolidTag>{itemsCount} items</SolidTag>
      </Flex>
    </Box>
  );
}
function SolidTag({ children }: { children: React.ReactNode }) {
  return (
    <LightMode>
      <Tag border="1px" borderColor="gray.500">
        {children}
      </Tag>
    </LightMode>
  );
}
