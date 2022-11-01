import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ItemFieldType } from "@prisma/client";
import type {
  ActionFunction,
  LoaderArgs,
  LoaderFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import invariant from "invariant";
import AutosizedTextarea from "~/components/common/AutosizedTextarea";
import BorderedBox from "~/components/common/BorderedBox";
import ButtonAsLink from "~/components/common/ButtonAsLink";
import CenteredForm from "~/components/forms/CenteredForm";
import { getCollectionFieldHeads } from "~/database/api/collection";
import useActionError from "~/hooks/useActionError";
import { db } from "~/lib/db.server";
import { generateCollectionUrl } from "~/utils/URLs";
import {
  validateCanEditCollection,
  validateCollectionDescription,
  validateCollectionName,
  validateId,
} from "~/utils/validate";

export const action: ActionFunction = async ({ request, params }) => {
  try {
    const form = await request.formData();
    const id = validateId(params.id);
    const description = validateCollectionDescription(form.get("name"));
    await validateCanEditCollection({ request, collectionId: id });
    await db.collection.update({
      where: { id },
      data: {
        description,
      },
    });
    return redirect(generateCollectionUrl(id));
  } catch (error: any) {
    return json({
      errorMessage: error?.message ?? "Something went wrong",
    });
  }
};

export async function loader({ params }: LoaderArgs) {
  const id = validateId(params.id);
  const heads = await getCollectionFieldHeads(id);
  if (heads === null) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ heads });
}

export default function EditCollectionNamePage() {
  const { heads } = useLoaderData<typeof loader>();
  const id = Number(useParams().id);
  return (
    <BorderedBox p={8}>
      <Stack spacing={6}>
        <ButtonAsLink to={generateCollectionUrl(id)}>
          Back to collection
        </ButtonAsLink>
        {heads.map((head) => (
          <BorderedBox key={head.id} my={1} p={4} width="full">
            <SimpleGrid
              alignItems="center"
              templateColumns="1fr 1fr 1fr"
              justifyItems="center"
            >
              <Text>{head.name}</Text>
              <Tag>{head.type}</Tag>
              <ButtonAsLink to={head.id.toString()}>Edit</ButtonAsLink>
            </SimpleGrid>
          </BorderedBox>
        ))}
        <ButtonAsLink to="new">New</ButtonAsLink>
        <Outlet />
      </Stack>
    </BorderedBox>
  );
}

{
  /* <Stack key={head.id}>
<FormControl>
  <FormLabel>Field name</FormLabel>
  <Input value={head.name} />
</FormControl>
<FormControl>
  <FormLabel>Field type</FormLabel>
  <Select value={head.type}>
    {Object.values(ItemFieldType).map((type) => (
      <option key={type}>{type}</option>
    ))}
  </Select>
</FormControl>
</Stack> */
}
