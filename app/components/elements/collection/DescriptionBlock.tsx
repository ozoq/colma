import type { BoxProps } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import type { FullCollectionType } from "~/database/shapes/fullCollection";

export type DescriptionBlockProps = BoxProps & {
  collection: Pick<FullCollectionType, "description">;
};

export default function DescriptionBlock(props: DescriptionBlockProps) {
  return (
    <Box
      borderBottom="1px"
      borderTop="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      py={4}
      {...props}
    >
      <Text px={8}>{props.collection.description}</Text>
    </Box>
  );
}
