import type { LoaderArgs } from "@remix-run/node";
import { authenticator } from "~/lib/auth/auth.server";

// CONSIDER/TODO: change to action, and trigger logout with a POST form instead of a redirect
//  keep loader, but make it redirect to home page is user accidentally visits logout
export async function loader({ request }: LoaderArgs) {
  return await authenticator.logout(request, { redirectTo: "/" });
}
