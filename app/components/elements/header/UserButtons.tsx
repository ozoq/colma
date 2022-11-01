import { Flex } from "@chakra-ui/react";
import { generateUserUrl } from "~/utils/URLs";
import ButtonAsLink from "../shared/ButtonAsLink";

export type UserButtonsProps = {
  userId: number | null;
};

export default function UserButtons({ userId }: UserButtonsProps) {
  if (userId === null) {
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
        to={generateUserUrl(userId)}
      >
        Profile
      </ButtonAsLink>
      <ButtonAsLink borderRadius={"full"} to="/logout">
        Log out
      </ButtonAsLink>
    </Flex>
  );
}
