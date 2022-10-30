import type { BoxProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import type { BasicItemType } from "~/database/shapes/basicItem";
import { useNavigate } from "@remix-run/react";
import { generateItemUrl } from "~/utils/URLs";
import Link from "~/components/elements/shared/Link";
import TagsRow from "~/components/elements/item/TagsRow";
import FieldsRow from "~/components/elements/item/FieldsRow";
import LikeRow from "~/components/elements/item/LikeRow";
import BorderedBox from "~/components/elements/shared/BorderedBox";

export type ItemCardProps = BoxProps & {
  item: BasicItemType;
};

export default function ItemCard(props: ItemCardProps) {
  const navigate = useNavigate();
  return (
    <BorderedBox {...props}>
      <Flex direction="column" p={4} height={500} maxWidth={400}>
        <TagsRow item={props.item} mb={4} />
        <Link to={generateItemUrl(props.item.id)}>
          <Heading mx={4} size="md" textAlign="center" mb={4}>
            {props.item.name}
          </Heading>
        </Link>
        <FieldsRow flex={1} item={props.item} mb={4} px={4} />
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
