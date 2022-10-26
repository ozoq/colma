import type { BoxProps } from "@chakra-ui/react";
import { Td } from "@chakra-ui/react";
import { Table, TableContainer, Tbody, Tr } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export type ItemFieldsProps = BoxProps & {
  item: {
    fields: { [key: string]: any };
  };
};

export default function ItemFields(props: ItemFieldsProps) {
  const { fields } = props.item;
  return (
    <Box gap={2} flexWrap="wrap" {...props}>
      <TableContainer>
        <Table>
          <Tbody>
            {Object.entries(fields).map(([fieldName, fieldValue]) => (
              <Tr key={fieldName} gap={2} mb={2}>
                <Td fontWeight={"medium"}>{fieldName}</Td>
                <Td>{fieldValue}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}