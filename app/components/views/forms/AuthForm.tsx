import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import BorderedBox from "~/components/elements/shared/BorderedBox";

export function UsernameInput() {
  return (
    <FormControl>
      <FormLabel>Username</FormLabel>
      <Input name="username" />
    </FormControl>
  );
}

export function PasswordInput() {
  return (
    <FormControl>
      <FormLabel>Password</FormLabel>
      <Input name="password" type="password" />
    </FormControl>
  );
}

export function SubmitButton({ label }: { label: string }) {
  return (
    <Button type="submit" colorScheme="blue">
      {label}
    </Button>
  );
}

export function Form({
  action,
  children,
  errorMessage,
}: {
  action: string;
  children: React.ReactNode;
  errorMessage: string;
}) {
  return (
    <BorderedBox p={8} w="20em">
      <form method="post" action={action}>
        <Stack spacing={4}>
          {errorMessage && (
            <Text color="red" fontWeight="medium">
              {errorMessage}
            </Text>
          )}
          {children}
        </Stack>
      </form>
    </BorderedBox>
  );
}

export function AuthForm({
  children,
  heading,
  action,
  errorMessage,
  submitLabel,
}: {
  children?: React.ReactNode;
  heading: string;
  action: string;
  errorMessage: string;
  submitLabel: string;
}) {
  return (
    <Flex align="center" justify="center" height="100%">
      <Stack py={12} px={6} spacing={8} alignItems="center">
        <Heading>{heading}</Heading>
        <Form action={action} errorMessage={errorMessage}>
          {children}
          <SubmitButton label={submitLabel} />
        </Form>
      </Stack>
    </Flex>
  );
}
