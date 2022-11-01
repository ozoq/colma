import { FormControl, FormLabel } from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import invariant from "invariant";
import { db } from "~/lib/db.server";
import AutosizedTextarea from "~/components/common/AutosizedTextarea";
import ButtonAsLink from "~/components/common/ButtonAsLink";
import CenteredForm from "~/components/forms/CenteredForm";
import useActionError from "~/hooks/useActionError";
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
    const topic = validateCollectionTopic(form.get("topic"));
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

export default function EditCollectionNamePage() {
  const id = Number(useParams().id);
  const { errorMessage } = useActionError();
  return (
    <CenteredForm
      action={generateCollectionUrl(id) + "/edit/description"}
      errorMessage={errorMessage}
      heading="Edit collection description"
      submitLabel="Update"
    >
      <ButtonAsLink to={generateCollectionUrl(id)}>
        Back to collection
      </ButtonAsLink>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <AutosizedTextarea name="name" rows={1} />
      </FormControl>
    </CenteredForm>
  );
}
