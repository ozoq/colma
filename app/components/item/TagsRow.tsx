import type { FlexProps } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { generateTagUrl } from "~/utils/URLs";
import Link from "../common/Link";

export type TagsRowProps = FlexProps & {
  item: {
    tags: string[];
  };
};

export default function TagsRow(props: TagsRowProps) {
  const { tags } = props.item;
  return (
    <Flex
      gap={2}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {tags.map((tag) => (
        <Link key={tag} to={generateTagUrl(tag)}>
          <Tag p={2} boxShadow="xs">
            {tag}
          </Tag>
        </Link>
      ))}
      {tags.length === 0 ? (
        <Tag p={2} boxShadow="xs">
          tagless
        </Tag>
      ) : null}
    </Flex>
  );
}
