import { Box, Flex, Heading } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import CollectionCard from "~/components/views/blocks/CollectionCard";
import CollectionDisplay from "~/components/views/blocks/CollectionDisplay";
import ItemCard from "~/components/views/blocks/ItemCard";
import Error404 from "~/components/views/errors/Error404";
import ErrorOther from "~/components/views/errors/ErrorOther";
import { getFullUserById } from "~/database/api/user";

export async function loader({ params }: LoaderArgs) {
  const user = await getFullUserById(Number(params.id));
  if (!user) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ user });
}

export default function CollectionPage() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <Box mb={12}>
      <Heading mb={5} textAlign="center" size="lg">
        User's collections / Your collections (i really need context)
      </Heading>
      <Flex justifyContent={"center"} flexWrap="wrap" gap={6}>
        {user.collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
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
