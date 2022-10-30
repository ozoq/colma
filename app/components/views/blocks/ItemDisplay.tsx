import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ItemFieldBasedOnType from "~/components/elements/item/FieldValueBasedOnType";
import BorderedBox from "~/components/elements/shared/BorderedBox";
import type { BasicItemType } from "~/database/shapes/basicItem";

export type ItemDisplayProps = { item: BasicItemType };

export default function ItemDisplay({ item }: ItemDisplayProps) {
  return (
    <Box mb={4} px={4}>
      <Flex flexWrap={"wrap"}>
        {item.fields.map((field) => (
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
