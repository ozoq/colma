import { SearchIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import { generateSearchUrl } from "~/utils/URLs";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function search() {
    navigate(generateSearchUrl(query));
  }

  return (
    <InputGroup size="md">
      <Input
        borderRadius={"full"}
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <InputRightElement>
        <Button borderRadius={"full"} onClick={search}>
          <SearchIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
