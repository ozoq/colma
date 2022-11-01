import type { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import CenteredForm, {
  PasswordInput,
  UsernameInput,
} from "~/components/forms/CenteredForm";
import { authenticate } from "~/lib/auth/auth.server";

export const action: ActionFunction = async ({ request }) => {
  return authenticate("form-login", request);
};

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  const errorMessage = actionData?.errorMessage;
  return (
    <CenteredForm
      heading="Sign in to your account"
      action="/login"
      errorMessage={errorMessage}
      submitLabel="Sign in"
    >
      <UsernameInput />
      <PasswordInput />
    </CenteredForm>
  );
}
