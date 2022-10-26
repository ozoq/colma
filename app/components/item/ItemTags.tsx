import type { FlexProps } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import Link from "../Link";

export type ItemTagsProps = FlexProps & {
  item: {
    tags: string[];
  };
};

const generateTagUrl = (tag: string) => `/search?byTag=${tag}`;

export default function ItemTags(props: ItemTagsProps) {
  const { tags } = props.item;
  return (
    <Flex gap={1} flexWrap="wrap" {...props} justifyContent="center">
      {tags.map((tag) => (
        <Link key={tag} to={generateTagUrl(tag)}>
          <Tag p={2} boxShadow="xs">
            {tag}
          </Tag>
        </Link>
      ))}
    </Flex>
  );
}
