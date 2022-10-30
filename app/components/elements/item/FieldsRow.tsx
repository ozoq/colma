import type { SimpleGridProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { BasicItemType } from "~/database/shapes/basicItem";
import { useRef } from "react";
import ItemFieldBasedOnType from "./FieldValueBasedOnType";
import OverflowableBox from "../shared/OverflowableBox";

export type FieldsRowProps = SimpleGridProps & {
  item: Pick<BasicItemType, "fields">;
};

export default function FieldsRow(props: FieldsRowProps) {
  const ref = useRef(null);
  const { fields } = props.item;
  return (
    <OverflowableBox
      ref={ref}
      shadow="inner"
      border="1px"
      borderColor={"gray.200"}
      rounded="lg"
      {...props}
    >
      <SimpleGrid templateColumns="1fr 2fr" p={4} gap={3} ref={ref}>
        {fields.map((field) => (
          <>
            <Text key={field.name} fontWeight={"medium"}>
              {field.name}
            </Text>
            <Box justifySelf="flex-start">
              <ItemFieldBasedOnType field={field} />
            </Box>
          </>
        ))}
      </SimpleGrid>
    </OverflowableBox>
  );
}
