import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Box borderBottom="1px" borderColor={"gray.100"}>
      <Flex gap="5" padding="7">
        <Image src="/colmanag.svg" alt="Colmanag" />
        <InputGroup size="md">
          <Input borderRadius={"full"} placeholder="Search" />
          <InputRightElement>
            <Button borderRadius={"full"}>
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
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
