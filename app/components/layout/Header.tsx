import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import Link from "../elements/shared/Link";
import SearchBar from "../elements/header/SearchBar";
import ButtonAsLink from "../elements/shared/ButtonAsLink";

export default function Header() {
  return (
    <Box borderBottom="1px" borderColor={"gray.100"}>
      <Flex gap="5" p={6} direction={{ base: "column", md: "row" }}>
        <Flex gap="5" flex={1}>
          <Link to="/" minWidth="151px">
            <Image src="/colmanag.svg" alt="Colmanag" height="100%" />
          </Link>
          <SearchBar />
        </Flex>
        <Flex gap="3" alignSelf="end">
          <Flex gap="3">
            <ButtonAsLink borderRadius={"full"} colorScheme="red" to="/login">
              Log in
            </ButtonAsLink>
            <ButtonAsLink borderRadius={"full"} to="/signup">
              Sign up
            </ButtonAsLink>
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
      </Flex>
    </Box>
  );
}
