import type { ButtonProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export type ItemLikeButtonProps = ButtonProps & {
  item: {
    id: number;
    likesAmount: number;
  };
};

export default function ItemLikeButton(props: ItemLikeButtonProps) {
  const { likesAmount } = props.item;
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
    <Button onClick={click} leftIcon={currentIcon}>
      {likesAmount + Number(isLiked)}
    </Button>
  );
}
