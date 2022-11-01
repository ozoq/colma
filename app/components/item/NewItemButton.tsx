import { PlusSquareIcon } from "@chakra-ui/icons";
import type { StackProps } from "@chakra-ui/react";
import { Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import ButtonAsLink from "../common/ButtonAsLink";

type NewItemButtonProps = StackProps;

export default function NewItemButton(props: NewItemButtonProps) {
  return (
    <Stack {...props}>
      <ButtonAsLink
        borderRadius={"xl"}
        border="1px"
        borderColor={useColorModeValue("gray.400", "black")}
        shadow={"md"}
        width="48"
        height="28"
        to="newItem"
      >
        <PlusSquareIcon
          color={useColorModeValue("gray.600", "gray.400")}
          boxSize="14"
        />
      </ButtonAsLink>
      <Text fontSize="md" fontWeight={"medium"}>
        Create new item
      </Text>
    </Stack>
  );
}
