import { Box, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ColorModeToggle from "./ColorModeToggle";
import Logo from "./Logo";
import UserButtons from "./UserButtons";
import Link from "../common/Link";

export default function Header() {
  return (
    <Box
      borderBottom="1px"
      borderColor={useColorModeValue("gray.100", "gray.700")}
    >
      <Flex gap="5" p={6} direction={{ base: "column", md: "row" }}>
        <Flex gap="5" flex={1}>
          <Link to="/" minWidth="151px">
            <Logo />
          </Link>
          <SearchBar />
        </Flex>
        <Flex gap="3" alignSelf="end">
          <UserButtons />
          <Flex gap="3" alignItems={"center"}>
            <Button
              borderRadius={"full"}
              variant="unstyled"
              className="language"
              size="sm"
            >
              <Image maxHeight={"100%"} src="/polish.svg" alt="PL" />
            </Button>
            <ColorModeToggle />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
