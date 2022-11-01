import { Button, Flex, Heading, Select, Stack, Text } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import ButtonAsLink from "~/components/common/ButtonAsLink";
import { CustomTag } from "~/components/common/CustomTag";
import { ImageBox, ImageBoxRow } from "~/components/common/ImageBox";
import ItemCard from "~/components/item/ItemCard";
import NewItemButton from "~/components/item/NewItemButton";
import { getCollectionById } from "~/database/api/collection";
import useResourceAuthorizationStatus from "~/hooks/useResourceAuthorizationStatus";
import useStyleProps from "~/hooks/useStyleProps";
import { generateCollectionUrl } from "~/utils/URLs";
import { tryLoadResource } from "~/utils/validate";

export async function loader({ params }: LoaderArgs) {
  return json({
    collection: await tryLoadResource(() =>
      getCollectionById(Number(params.id))
    ),
  });
}

export default function CollectionPage() {
  const { collection } = useLoaderData<typeof loader>();
  const { isOwned } = useResourceAuthorizationStatus(collection.author.id);
  return (
    <Stack spacing={4}>
      <Stack>
        <Stack>
          {isOwned && (
            <Flex>
              <ButtonAsLink
                size="sm"
                colorScheme="yellow"
                to={generateCollectionUrl(collection.id) + "/edit/name"}
              >
                Edit name
              </ButtonAsLink>
            </Flex>
          )}
          <Heading mb={4} size="lg">
            {collection.name}
          </Heading>
        </Stack>
        <ImageBox imageUrl={collection.imageUrl} height={300}>
          <ImageBoxRow rowPosition="tr" alignItems="start">
            {isOwned ? (
              <ButtonAsLink size="sm" height="auto" px={0} to={"edit/topic"}>
                <CustomTag tagVariant="solid" colorScheme="yellow">
                  {collection.topic}
                </CustomTag>
              </ButtonAsLink>
            ) : (
              <CustomTag tagVariant="solid">{collection.topic}</CustomTag>
            )}
            <CustomTag tagVariant="solid">
              {collection.itemsCount} items
            </CustomTag>
          </ImageBoxRow>
        </ImageBox>
      </Stack>

      <Stack borderY="1px" {...useStyleProps().subtleBorder} py={4} spacing={4}>
        {isOwned && (
          <Flex>
            <ButtonAsLink
              size="sm"
              colorScheme="yellow"
              to={generateCollectionUrl(collection.id) + "/edit/description"}
            >
              Edit
            </ButtonAsLink>
          </Flex>
        )}
        <Text px={8}>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={collection.description}
            skipHtml
          />
        </Text>
      </Stack>

      {isOwned && (
        <Flex gap={2}>
          <ButtonAsLink
            size="sm"
            colorScheme="yellow"
            to={generateCollectionUrl(collection.id) + "/edit/fields"}
          >
            Configure items
          </ButtonAsLink>
          <Button size="sm" colorScheme="purple">
            Filter
          </Button>
          <Select variant="filled" ml="auto" w="20em" size="sm">
            <option value="newest">New first</option>
            <option value="oldest">Old first</option>
          </Select>
        </Flex>
      )}

      <Flex justifyContent={"center"} flexWrap="wrap" alignItems="center">
        {isOwned && <NewItemButton />}
        {collection.items.map((item) => (
          <ItemCard key={item.id} item={item} m={4} />
        ))}
      </Flex>
    </Stack>
  );
}
