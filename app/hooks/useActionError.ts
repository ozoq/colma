import { useActionData } from "@remix-run/react";

export default function useActionError() {
  const actionData = useActionData();
  const errorMessage: string = actionData?.errorMessage ?? "";

  return { errorMessage };
}
