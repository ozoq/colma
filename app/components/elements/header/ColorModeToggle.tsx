import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button borderRadius={"full"} size="sm" onClick={toggleColorMode}>
      {colorMode === "light" ? (
        <MoonIcon color="gray.600" />
      ) : (
        <SunIcon color="gray.600" />
      )}
    </Button>
  );
}
