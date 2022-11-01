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
    const id = validateId(params.id);
    await validateCanEditCollection({
      request,
      collectionId: id,
    });
    const name = validateFieldName(form.get("name"));
    const type = validateFieldType(form.get("type"));
    await db.fieldHead.create({
      data: {
        name,
        type,
        collection: {
          connect: {
            id,
          },
        },
      },
    });
    return redirect(".");
  } catch (error: any) {
    return json({
      errorMessage: error?.message ?? "Something went wrong",
    });
  }
};

export default function NewField() {
  const { errorMessage } = useActionError();
  return (
    <PostForm action={undefined} errorMessage={errorMessage}>
      <Text>{`Creating new field`}</Text>
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
      <SubmitButton label="Create" />
    </PostForm>
  );
}
