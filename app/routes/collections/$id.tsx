import { Box, Flex, Heading } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import CollectionDescription from "~/components/collection/CollectionDescription";
import CollectionImage from "~/components/collection/CollectionImage";
import ItemCard from "~/components/item/ItemCard";
import { getCollection } from "~/models/collection.server";

export async function loader({ params }: LoaderArgs) {
  const collection = await getCollection({ id: Number(params.id) });
  if (!collection) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ collection });
}

export default function CollectionPage() {
  const { collection } = useLoaderData<typeof loader>();
  return (
    <Box>
      <Heading mb={4}>{collection.name}</Heading>
      <CollectionImage collection={collection} height={300} mb={6} />
      <CollectionDescription collection={collection} mb={6} />
      <Flex justifyContent={"center"} flexWrap="wrap">
        {collection.items.map((item) => (
          <ItemCard key={item.id} item={item} m={4} />
        ))}
      </Flex>
    </Box>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Box>
      <Heading mb={5} textAlign="center" size="md">
        Something went wrong..
      </Heading>
    </Box>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <Box>
        <Heading mb={5} textAlign="center" size="md">
          Collection not found :(
        </Heading>
      </Box>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
