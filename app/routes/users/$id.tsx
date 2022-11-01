import { Box, Flex, Heading } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import invariant from "invariant";
import CollectionCard from "~/components/collection/CollectionCard";
import NewCollectionButton from "~/components/collection/NewCollectionButton";
import Error404 from "~/components/errors/Error404";
import ErrorOther from "~/components/errors/ErrorOther";
import { getFullUserById } from "~/database/api/user";
import useResourceAuthorizationStatus from "~/hooks/useResourceAuthorizationStatus";

export async function loader({ params }: LoaderArgs) {
  // TODO
  try {
    const id = Number(params.id);
    invariant(!Number.isNaN(id), "id should be a number");
    const user = await getFullUserById(id);
    invariant(user !== null, "user not found");
    return json({ user });
  } catch {
    throw new Response("Not Found", { status: 404 });
  }
}

export default function CollectionPage() {
  const { user } = useLoaderData<typeof loader>();
  const { isOwned } = useResourceAuthorizationStatus(user.id);

  return (
    <Box mb={12}>
      <Heading mb={12} textAlign="center" size="lg">
        {isOwned ? "Your collections" : `Collections by ${user.username}`}
      </Heading>
      <Flex justifyContent={"center"} flexWrap="wrap" gap={4} rowGap={12}>
        {isOwned && <NewCollectionButton />}
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
