import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

import type { RemixLinkProps } from "@remix-run/react/dist/components";
import { Link as RemixLink } from "@remix-run/react";

export default function Link(props: RemixLinkProps & ChakraLinkProps) {
  return (
    <RemixLink {...props}>
      <ChakraLink {...props}></ChakraLink>
    </RemixLink>
  );
}
