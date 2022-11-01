import type { LoaderArgs } from "@remix-run/node";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getItemById } from "~/database/api/item";
import Comments from "~/components/item/Comments";
import TagsRow from "~/components/item/TagsRow";
import LikeRow from "~/components/item/LikeRow";
import ItemDisplay from "~/components/item/ItemDisplay";
import CollectionPiece from "~/components/collection/CollectionPiece";
import { tryLoadResource } from "~/utils/validate";

export async function loader({ params }: LoaderArgs) {
  return json({
    item: await tryLoadResource(() => getItemById(Number(params.id))),
  });
}

export default function ItemPage() {
  const { item } = useLoaderData<typeof loader>();
  return (
    <Stack spacing={6}>
      <Stack
        pb={2}
        borderBottom="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        spacing={8}
      >
        <Heading>{item.name}</Heading>
        <Flex justifyContent="space-between" gap={4} alignItems="bottom">
          <TagsRow justifyContent="start" item={item} />
          <LikeRow item={{ likes: 12 }} />
        </Flex>
      </Stack>

      <SimpleGrid gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4}>
        <ItemDisplay
          item={item}
          pr={4}
          mr={2}
          borderRight="1px"
          borderColor={useColorModeValue("gray.100", "gray.700")}
        />
        <Box>
          <CollectionPiece collection={item.collection} mb={8} />
          <Comments item={item} />
        </Box>
      </SimpleGrid>
    </Stack>
  );
}
