import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import invariant from "invariant";
import { db } from "~/lib/db.server";
import ButtonAsLink from "~/components/common/ButtonAsLink";
import CenteredForm from "~/components/forms/CenteredForm";
import useActionError from "~/hooks/useActionError";
import { generateCollectionUrl } from "~/utils/URLs";
import {
  validateCollectionName,
  validateId,
  validateThatOwner,
} from "~/utils/validate";

export const action: ActionFunction = async ({ request, params }) => {
  try {
    const form = await request.formData();
    const id = validateId(params.id);
    const collection = await db.collection.findUnique({
      where: { id },
    });
    invariant(collection !== null, "No such collection");
    await validateThatOwner(request, collection.authorId);
    const name = validateCollectionName(form.get("name"));
    await db.collection.update({
      where: { id },
      data: {
        name,
      },
    });
    return redirect(generateCollectionUrl(id));
  } catch (error: any) {
    return json({
      errorMessage: error?.message ?? "Something went wrong",
    });
  }
};

export default function EditCollectionNamePage() {
  const id = Number(useParams().id);
  const { errorMessage } = useActionError();
  return (
    <CenteredForm
      action={generateCollectionUrl(id) + "/edit/name"}
      errorMessage={errorMessage}
      heading="Edit collection name"
      submitLabel="Update"
    >
      <ButtonAsLink to={generateCollectionUrl(id)}>
        Back to collection
      </ButtonAsLink>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" />
      </FormControl>
    </CenteredForm>
  );
}
