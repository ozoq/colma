import type { ButtonProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import type { BasicItemType } from "~/database/shapes/basicItem";

export type LikeRowProps = ButtonProps & {
  item: Pick<BasicItemType, "likes">;
};

export default function LikeRow(props: LikeRowProps) {
  const { likes } = props.item;
  const [isLiked, setIsLiked] = useState(false);

  function click() {
    setIsLiked((prev) => !prev);
  }

  const currentIcon = isLiked ? (
    <Icon as={FaHeart} color="red" />
  ) : (
    <Icon as={FaRegHeart} />
  );

  return (
    <Button onClick={click} leftIcon={currentIcon} {...props}>
      {likes + Number(isLiked)}
    </Button>
  );
}
