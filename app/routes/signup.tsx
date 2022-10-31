import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import BorderedBox from "~/components/elements/shared/BorderedBox";

export const action: ActionFunction = async ({ request }) => {
  return json({});
};

export default function SignupPage() {
  return (
    <Flex align="center" justify="center" height="100%">
      <Stack py={12} px={6} spacing={8} alignItems="center">
        <Heading>Create an account</Heading>
        <BorderedBox p={8} width="400px">
          <form method="post" action="/signup">
            <Stack spacing={4}>
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
