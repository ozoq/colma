import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import ChakraStyles from "./lib/chakra/ChakraStyles";
import Main from "./components/layout/Main";
import { authenticator } from "./lib/auth/auth.server";
import Header from "./components/layout/Header";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Colmanag",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await authenticator.isAuthenticated(request);
  return json({
    userId,
  });
};

export default function App() {
  const { userId } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ChakraStyles />
      </head>
      <body>
        <ChakraProvider>
          <Main userId={userId}>
            <Outlet />
          </Main>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
