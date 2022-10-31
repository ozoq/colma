import type { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import {
  AuthForm,
  PasswordInput,
  UsernameInput,
} from "~/components/views/forms/AuthForm";
import { authenticate } from "~/lib/auth/auth.server";

export const action: ActionFunction = async ({ request }) => {
  return authenticate("form-signup", request);
};

export default function SignupPage() {
  const actionData = useActionData<typeof action>();
  const errorMessage = actionData?.errorMessage;
  return (
    <AuthForm
      heading="Create an account"
      action="/signup"
      errorMessage={errorMessage}
      submitLabel="Sign up"
    >
      <UsernameInput />
      <PasswordInput />
    </AuthForm>
  );
}
