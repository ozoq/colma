import type { BoxProps } from "@chakra-ui/react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import type { BasicItemType } from "~/database/shapes/basicItem";
import BorderedBox from "../common/BorderedBox";
import ItemFieldBasedOnType from "./FieldValueBasedOnType";

export type ItemDisplayProps = BoxProps & { item: BasicItemType };

export default function ItemDisplay(props: ItemDisplayProps) {
  return (
    <Box mb={4} px={4} {...props}>
      <Flex flexWrap={"wrap"}>
        {props.item.fields.map((field) => (
          <BorderedBox key={field.name} my={1} p={4} width="full">
            <SimpleGrid alignItems="center" templateColumns="1fr 2fr">
              <Text fontWeight={"medium"}>{field.name}</Text>
              <ItemFieldBasedOnType field={field} />
            </SimpleGrid>
          </BorderedBox>
        ))}
      </Flex>
    </Box>
  );
}
