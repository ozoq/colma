import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import PostForm from "./PostForm";

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

export default function CenteredForm({
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
    <Flex align="center" justify="center" height="100%" width="100%">
      <Stack py={12} px={6} spacing={8} alignItems="center" width="100%">
        <Heading>{heading}</Heading>
        <Box width="100%">
          <PostForm action={action} errorMessage={errorMessage}>
            {children}
            <SubmitButton label={submitLabel} />
          </PostForm>
        </Box>
      </Stack>
    </Flex>
  );
}
