import type { TagProps } from "@chakra-ui/react";
import { LightMode, Tag } from "@chakra-ui/react";
import React from "react";

type Variant = "solid";

export type CustomTagProps = TagProps & {
  tagVariant: Variant;
  children: React.ReactNode;
};

export default function CustomTag(props: CustomTagProps) {
  return React.createElement(variants[props.tagVariant], props);
}

const variants = {
  solid: SolidTag,
};

function SolidTag(props: CustomTagProps) {
  return (
    <LightMode>
      <Tag border="1px" borderColor="gray.500" {...props}>
        {props.children}
      </Tag>
    </LightMode>
  );
}
