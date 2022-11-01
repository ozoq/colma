import { Box, Flex, Heading } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ItemCard from "~/components/item/ItemCard";
import { getRecentItems } from "~/database/api/item";

export async function loader({ request }: LoaderArgs) {
  const query = new URL(request.url).searchParams.get("query");
  return json({ items: await getRecentItems(), forQuery: query });
}

export default function SearchPage() {
  const { items, forQuery } = useLoaderData<typeof loader>();

  return (
    <Box>
      <Heading size="lg" mb={4}>
        Search results for {`"${forQuery}"`}
      </Heading>
      <Flex
        justifyContent={"center"}
        flexWrap="wrap"
        gap={4}
        alignItems="start"
      >
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Flex>
    </Box>
  );
}
