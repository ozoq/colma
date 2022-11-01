import { Stack, Text } from "@chakra-ui/react";
import BorderedBox from "../common/BorderedBox";

export default function PostForm({
  action,
  children,
  errorMessage,
}: {
  action: string | undefined;
  children: React.ReactNode;
  errorMessage: string;
}) {
  return (
    <BorderedBox p={8}>
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
