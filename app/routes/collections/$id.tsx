import { Box, Flex } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import CollectionDisplay from "~/components/views/blocks/CollectionDisplay";
import ItemCard from "~/components/views/blocks/ItemCard";
import Error404 from "~/components/views/errors/Error404";
import ErrorOther from "~/components/views/errors/ErrorOther";
import { getCollectionById } from "~/database/api/collection";

export async function loader({ params }: LoaderArgs) {
  const collection = await getCollectionById(Number(params.id));
  if (!collection) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ collection });
}

export default function CollectionPage() {
  const { collection } = useLoaderData<typeof loader>();
  return (
    <Box>
      <CollectionDisplay collection={collection} />
      <Flex justifyContent={"center"} flexWrap="wrap" alignItems="center">
        {collection.items.map((item) => (
          <ItemCard key={item.id} item={item} m={4} />
        ))}
      </Flex>
    </Box>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <ErrorOther />;
}

// TODO: try to transfer to root.tsx
export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return <Error404 />;
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
