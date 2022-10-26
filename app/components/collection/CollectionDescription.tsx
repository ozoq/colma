import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import type { CollectionType } from "~/lib/data";

export type CollectionDescriptionProps = BoxProps & {
  collection: CollectionType;
};

export default function CollectionDescription(
  props: CollectionDescriptionProps
) {
  return (
    <Box
      borderBottom="1px"
      borderTop="1px"
      borderColor={"gray.100"}
      py={4}
      {...props}
    >
      <Text px={8}>{props.collection.description}</Text>
    </Box>
  );
}
