import type { BoxProps } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import type { FullCollectionType } from "~/database/shapes/fullCollection";

export type CollectionDescriptionProps = BoxProps & {
  collection: Pick<FullCollectionType, "description">;
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
