import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import ChakraStyles from "./lib/chakra/ChakraStyles";
import Main from "./components/layout/Main";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Colmanag",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <ChakraStyles />
      </head>
      <body>
        <ChakraProvider>
          <Main>
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
