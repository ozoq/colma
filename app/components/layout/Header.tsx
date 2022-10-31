import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Link from "../elements/shared/Link";
import SearchBar from "../elements/header/SearchBar";

export default function Header() {
  return (
    <Box borderBottom="1px" borderColor={"gray.100"}>
      <Flex gap="5" padding="7">
        <Link to="/" minWidth="151px">
          <Image src="/colmanag.svg" alt="Colmanag" height="100%" />
        </Link>
        <SearchBar />
        <Flex gap="3">
          <Button borderRadius={"full"} colorScheme="red">
            Log in
          </Button>
          <Button borderRadius={"full"}>Sign up</Button>
        </Flex>
        <Flex gap="3" alignItems={"center"}>
          <Button
            borderRadius={"full"}
            variant="unstyled"
            className="language"
            size="sm"
          >
            <Image maxHeight={"100%"} src="/polish.svg" alt="PL" />
          </Button>
          <Button borderRadius={"full"} size="sm">
            <MoonIcon color="gray.600" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}