import type { SimpleGridProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { BasicItemType } from "~/database/shapes/basicItem";
import ItemField from "./ItemField";

export type ItemFieldsProps = SimpleGridProps & {
  item: Pick<BasicItemType, "fields">;
};

export default function ItemFields(props: ItemFieldsProps) {
  const { fields } = props.item;
  return (
    <SimpleGrid {...props} templateColumns="1fr 2fr" gap={2}>
      {fields.map((field) => (
        <>
          <Text key={field.name} fontWeight={"medium"}>
            {field.name}
          </Text>
          <Box justifySelf="flex-start">
            <ItemField field={field} />
          </Box>
        </>
      ))}
    </SimpleGrid>
  );
}
