import type { BoxProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import type { BasicItemType } from "~/database/shapes/basicItem";
import { useNavigate } from "@remix-run/react";
import { generateItemUrl } from "~/utils/URLs";
import FieldsRow from "~/components/item/FieldsRow";
import BorderedBox from "../common/BorderedBox";
import TagsRow from "./TagsRow";
import Link from "../common/Link";
import LikeRow from "./LikeRow";

export type ItemCardProps = BoxProps & {
  item: BasicItemType;
};

export default function ItemCard(props: ItemCardProps) {
  const navigate = useNavigate();
  return (
    <BorderedBox {...props}>
      <Flex direction="column" p={4} height="25em" width="20em">
        <TagsRow item={props.item} mb={4} />
        <Link to={generateItemUrl(props.item.id)}>
          <Heading mx={4} size="sm" textAlign="center" mb={4}>
            {props.item.name}
          </Heading>
        </Link>
        <FieldsRow flex={1} item={props.item} mb={4} px={2} />
        <Flex justifyContent="flex-end" gap={2}>
          <LikeRow item={props.item} />
          <Button
            flex={1}
            onClick={() => navigate(generateItemUrl(props.item.id))}
          >
            More
          </Button>
        </Flex>
      </Flex>
    </BorderedBox>
  );
}
