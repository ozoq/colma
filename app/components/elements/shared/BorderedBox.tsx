import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export type BorderedBoxProps = BoxProps;

export default function BorderedBox(props: BorderedBoxProps) {
  return (
    <Box
      rounded="lg"
      shadow="lg"
      border="1px"
      borderColor={"gray.400"}
      {...props}
    >
      {props.children}
    </Box>
  );
}
