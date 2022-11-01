import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { CollectionTopic } from "@prisma/client";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import invariant from "invariant";
import AutosizedTextarea from "~/components/common/AutosizedTextarea";
import ButtonAsLink from "~/components/common/ButtonAsLink";
import CenteredForm from "~/components/forms/CenteredForm";
import useActionError from "~/hooks/useActionError";
import { db } from "~/lib/db.server";
import { generateCollectionUrl } from "~/utils/URLs";
import {
  validateCanEditCollection,
  validateCollectionTopic,
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
        topic,
      },
    });
    return redirect(generateCollectionUrl(id));
  } catch (error: any) {
    return json({
      errorMessage: error?.message ?? "Something went wrong",
    });
  }
};

export default function EditCollectionTopic() {
  const id = Number(useParams().id);
  const { errorMessage } = useActionError();
  return (
    <CenteredForm
      action={generateCollectionUrl(id) + "/edit/topic"}
      errorMessage={errorMessage}
      heading="Edit collection description"
      submitLabel="Update"
    >
      <ButtonAsLink to={generateCollectionUrl(id)}>
        Back to collection
      </ButtonAsLink>
      <FormControl>
        <FormLabel>Topic</FormLabel>
        <Select name="topic">
          {Object.values(CollectionTopic).map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </Select>
      </FormControl>
    </CenteredForm>
  );
}
