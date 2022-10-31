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
import { useCatch, useLoaderData } from "@remix-run/react";
import { getItemById } from "~/database/api/item";
import TagsRow from "~/components/elements/item/TagsRow";
import LikeRow from "~/components/elements/item/LikeRow";
import CollectionPiece from "~/components/views/blocks/CollectionPiece";
import ItemDisplay from "~/components/views/blocks/ItemDisplay";
import Comments from "~/components/views/blocks/Comments";
import ErrorOther from "~/components/views/errors/ErrorOther";
import Error404 from "~/components/views/errors/Error404";

export async function loader({ params }: LoaderArgs) {
  const item = await getItemById(Number(params.id));
  if (!item) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ item });
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

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <ErrorOther />;
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return <Error404 />;
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
