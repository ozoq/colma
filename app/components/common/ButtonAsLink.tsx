import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import type { To } from "history";

export type ButtonAsLinkProps = ButtonProps & {
  to: To;
};

export default function ButtonAsLink(props: ButtonAsLinkProps) {
  const navigate = useNavigate();
  const { to, onClick, children } = props;

  function click(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    navigate(to);
  }

  return (
    <Button {...props} onClick={click}>
      {children}
    </Button>
  );
}
