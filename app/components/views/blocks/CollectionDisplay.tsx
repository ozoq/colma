import type { BoxProps } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import CollectionImage from "~/components/elements/collection/CollectionImage";
import DescriptionBlock from "~/components/elements/collection/DescriptionBlock";
import type { FullCollectionType } from "~/database/shapes/fullCollection";

export type CollectionDisplayProps = BoxProps & {
  collection: FullCollectionType;
};

export default function CollectionDisplay(props: CollectionDisplayProps) {
  const { collection } = props;
  const { name } = collection;
  return (
    <Box {...props}>
      <Heading mb={4}>{name}</Heading>
      <CollectionImage collection={collection} height={300} mb={6} />
      <DescriptionBlock collection={collection} mb={6} />
    </Box>
  );
}