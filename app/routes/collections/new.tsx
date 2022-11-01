import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CollectionTopic } from "@prisma/client";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import invariant from "invariant";
import AutosizedTextarea from "~/components/common/AutosizedTextarea";
import BorderedBox from "~/components/common/BorderedBox";
import { authenticator } from "~/lib/auth/auth.server";
import { db } from "~/lib/db.server";
import { generateCollectionUrl } from "~/utils/URLs";

export const action: ActionFunction = async ({ request }) => {
  try {
    return redirect(generateCollectionUrl((await newCollection(request)).id));
  } catch (error) {
    console.log(error);
    return json({ errorMessage: "asd" });
  }
};

async function newCollection(request: Request) {
  const currentUserId = await authenticator.isAuthenticated(request);
  invariant(currentUserId !== null, "Should be signed in");
  const form = await request.formData();
  const name = validateName(form.get("name"));
  const description = validateDescription(form.get("description"));
  const topic = validateTopic(form.get("topic"));

  console.log("creating..");

  const collection = await db.collection.create({
    data: {
      name: name,
      description: description,
      imageUrl: "https://picsum.photos/id/347/600/600",
      topic: topic,
      author: {
        connect: {
          id: currentUserId,
        },
      },
    },
  });

  return collection;
}

function validateName(name: any) {
  invariant(typeof name === "string", "Name must be a string");
  invariant(name.length > 0, "Name cannot be empty");
  return name;
}

function validateDescription(description: any) {
  invariant(typeof description === "string", "Description must be a string");
  invariant(description.length > 0, "Description cannot be empty");
  return description;
}

function validateTopic(topic: any) {
  invariant(typeof topic === "string", "Topic must be a string");
  invariant(
    Object.values(CollectionTopic).includes(topic as CollectionTopic),
    "No such topic exists"
  );
  return topic as CollectionTopic;
}

export default function NewCollectionPage() {
  const actionData = useActionData<typeof action>();
  const errorMessage = actionData?.errorMessage;
  return (
    <BorderedBox p={5}>
      <form method="post" action="/collections/new">
        <Stack spacing={4}>
          {errorMessage && (
            <Text color="red" fontWeight="medium">
              {errorMessage}
            </Text>
          )}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input name="name" />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <AutosizedTextarea name="description" />
          </FormControl>
          <Select name="topic">
            {Object.values(CollectionTopic).map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </Select>
          <Button type="submit" colorScheme="blue">
            Create
          </Button>
        </Stack>
      </form>
    </BorderedBox>
  );
}
