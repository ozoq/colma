import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ColorModeToggle() {
  const { toggleColorMode } = useColorMode();

  return (
    <Button borderRadius={"full"} size="md" px={0} onClick={toggleColorMode}>
      {useColorModeValue(
        <MoonIcon color="gray.600" />,
        <SunIcon color="gray.100" />
      )}
    </Button>
  );
}
