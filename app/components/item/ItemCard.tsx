import type { BoxProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ItemFields from "./ItemFields";
import ItemTags from "./ItemTags";
import ItemLikeButton from "./ItemLikeButton";
import type { BasicItemType } from "~/database/shapes/basicItem";

export type ItemCardProps = BoxProps & {
  item: BasicItemType;
};

export default function ItemCard(props: ItemCardProps) {
  return (
    <Box
      p={4}
      rounded="lg"
      boxShadow="lg"
      border="1px"
      borderColor={"gray.400"}
      maxWidth={400}
      mb={2}
      {...props}
    >
      <ItemTags item={props.item} mb={4} />
      <Heading mx={4} size="md" textAlign="center" mb={4}>
        {props.item.name}
      </Heading>
      <ItemFields item={props.item} mb={4} px={4} />
      <Flex justifyContent="flex-end" gap={2}>
        <ItemLikeButton item={props.item} />
        <Button flex={1}>Comments</Button>
      </Flex>
    </Box>
  );
}
