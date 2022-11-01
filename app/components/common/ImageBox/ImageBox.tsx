import type { BoxProps } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import useStyleProps from "~/hooks/useStyleProps";

export type ImageBoxProps = BoxProps & {
  imageUrl: string;
  children: React.ReactNode;
};

export default function ImageBox(props: ImageBoxProps) {
  const { imageUrl, children } = props;
  return (
    <Box sx={{ position: "relative" }} {...props}>
      <Image
        height="100%"
        width="100%"
        fit="cover"
        src={imageUrl}
        {...useStyleProps().boxBorder}
      />
      {children}
    </Box>
  );
}
