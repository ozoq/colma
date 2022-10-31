import type { BoxProps } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export type BorderedBoxProps = BoxProps;

export default function BorderedBox(props: BorderedBoxProps) {
  return (
    <Box
      rounded="lg"
      shadow="lg"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      {...props}
    >
      {props.children}
    </Box>
  );
}
