import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";

type Position = "tr" | "br" | "bl" | "tl";

export type ImageBoxRowProps = FlexProps & {
  rowPosition: Position;
  children: React.ReactNode;
};

export default function ImageBoxRow(props: ImageBoxRowProps) {
  const { rowPosition, children } = props;
  return (
    <Flex
      sx={{ position: "absolute", top: 2, right: 2 }}
      position="absolute"
      gap={2}
      {...getAbsolutePositionProps(rowPosition)}
      {...props}
    >
      {children}
    </Flex>
  );
}

function getAbsolutePositionProps(position: Position) {
  const GAP = 2;
  return {
    tr: {
      top: GAP,
      right: GAP,
    },
    br: {
      bottom: GAP,
      right: GAP,
    },
    bl: {
      bottom: GAP,
      right: GAP,
    },
    tl: {
      top: GAP,
      right: GAP,
    },
  }[position];
}
