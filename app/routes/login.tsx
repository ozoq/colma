import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { AuthorizationError } from "remix-auth";
import BorderedBox from "~/components/elements/shared/BorderedBox";
import { authenticator } from "~/lib/auth.server";

export const action: ActionFunction = async ({ request }) => {
  try {
    return await authenticator.authenticate("form", request, {
      successRedirect: "/",
      throwOnError: true,
    });
  } catch (error) {
    // Not an actual error but a success redirect
    if (error instanceof Response) return error;
    if (error instanceof AuthorizationError) {
      return json({ errorMessage: error.message });
    }
    return json({ errorMessage: "Unknown error has happened" });
  }
};

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  return (
    <Flex align="center" justify="center" height="100%">
      <Stack py={12} px={6} spacing={8} alignItems="center">
        <Heading>Sign in to your account</Heading>
        <BorderedBox p={8} width="400px">
          <form method="post" action="/login">
            <Stack spacing={4}>
              {actionData?.errorMessage && (
                <Text color="red" fontWeight="medium">
                  {actionData.errorMessage}
                </Text>
              )}
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input name="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input name="password" type="password" />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Sign in
              </Button>
            </Stack>
          </form>
        </BorderedBox>
      </Stack>
    </Flex>
  );
}
