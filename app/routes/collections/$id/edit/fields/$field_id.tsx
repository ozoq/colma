import { FormControl, FormLabel, Input, Select, Text } from "@chakra-ui/react";
import { ItemFieldType } from "@prisma/client";
import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "invariant";
import { db } from "~/lib/db.server";
import { SubmitButton } from "~/components/forms/CenteredForm";
import PostForm from "~/components/forms/PostForm";
import { getFieldHead } from "~/database/api/collection";
import useActionError from "~/hooks/useActionError";
import {
  validateCanEditCollection,
  validateFieldName,
  validateFieldType,
  validateId,
} from "~/utils/validate";

export const action: ActionFunction = async ({ request, params }) => {
  try {
    const form = await request.formData();
    const id = validateId(params.field_id);
    const head = await getFieldHead(id);
    invariant(head !== null, "No such field");
    await validateCanEditCollection({
      request,
      collectionId: head?.collectionId,
    });
    const name = validateFieldName(form.get("name"));
    const type = validateFieldType(form.get("type"));
    await db.fieldHead.update({
      where: { id },
      data: {
        name,
        type,
      },
    });
    return redirect(".");
  } catch (error: any) {
    return json({
      errorMessage: error?.message ?? "Something went wrong",
    });
  }
};

export async function loader({ params }: LoaderArgs) {
  const id = validateId(params.field_id);
  const head = await db.fieldHead.findUnique({
    where: { id },
  });
  if (head === null) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ head });
}

export default function EditFieldHead() {
  const { head } = useLoaderData<typeof loader>();
  const { errorMessage } = useActionError();
  return (
    <PostForm action={undefined} errorMessage={errorMessage}>
      <Text>{`Editing ${head.name} field`}</Text>
      <FormControl>
        <FormLabel>Field name</FormLabel>
        <Input name="name" />
      </FormControl>
      <FormControl>
        <FormLabel>Field type</FormLabel>
        <Select name="type">
          {Object.values(ItemFieldType).map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Select>
      </FormControl>
      <SubmitButton label="Save" />
    </PostForm>
  );
}
