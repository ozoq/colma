import type { BoxProps } from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";

export type OverflowableBoxProps = BoxProps;

export default React.forwardRef<HTMLElement, OverflowableBoxProps>(
  function OverflowableBox(props: OverflowableBoxProps, childRef) {
    const childSize = useSize(childRef as React.RefObject<HTMLElement>);
    const containerRef = useRef(null);
    const containerSize = useSize(containerRef);
    return (
      <Box overflow="hidden" position="relative" {...props} ref={containerRef}>
        {props.children}
        {childSize &&
          containerSize &&
          childSize.height > containerSize.height && <BottomShadow />}
      </Box>
    );
  }
);

function BottomShadow() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        background:
          "-webkit-linear-gradient(90deg, rgba(0, 0, 0, 0.10), transparent); linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent)",
        left: 0,
        width: "100%",
        height: "10px",
      }}
    />
  );
}
