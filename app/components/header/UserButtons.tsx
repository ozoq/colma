import { Flex } from "@chakra-ui/react";
import useGlobalContext from "~/hooks/useGlobalContext";
import { generateUserUrl } from "~/utils/URLs";
import ButtonAsLink from "../common/ButtonAsLink";

export default function UserButtons() {
  const { currentUserId } = useGlobalContext();

  if (currentUserId === null) {
    return (
      <Flex gap="3">
        <ButtonAsLink borderRadius={"full"} colorScheme="red" to="/login">
          Log in
        </ButtonAsLink>
        <ButtonAsLink borderRadius={"full"} to="/signup">
          Sign up
        </ButtonAsLink>
      </Flex>
    );
  }

  return (
    <Flex gap="3">
      <ButtonAsLink
        borderRadius={"full"}
        colorScheme="red"
        to={generateUserUrl(currentUserId)}
      >
        Profile
      </ButtonAsLink>
      <ButtonAsLink borderRadius={"full"} to="/logout">
        Log out
      </ButtonAsLink>
    </Flex>
  );
}
