import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import { Link as RemixLink } from "@remix-run/react";

export type LinkProps = RemixLinkProps & ChakraLinkProps;

export default function Link(props: LinkProps) {
  return <ChakraLink {...props} as={RemixLink}></ChakraLink>;
}
