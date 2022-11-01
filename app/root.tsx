import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import ChakraStyles from "./lib/chakra/ChakraStyles";
import Main from "./components/Main";
import { authenticator } from "./lib/auth/auth.server";
import { GlobalContext } from "./hooks/useGlobalContext";
import Error404 from "./components/errors/Error404";
import ErrorOther from "./components/errors/ErrorOther";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Colmanag",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const currentUserId = await authenticator.isAuthenticated(request);
  return json({
    currentUserId,
  });
};

export default function App() {
  const { currentUserId } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ChakraStyles />
      </head>
      <body>
        <ChakraProvider>
          <GlobalContext.Provider
            value={{
              currentUserId,
            }}
          >
            <Main>
              <Outlet />
            </Main>
          </GlobalContext.Provider>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Main>
      <ErrorOther />
    </Main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <Main>
        <Error404 />
      </Main>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
