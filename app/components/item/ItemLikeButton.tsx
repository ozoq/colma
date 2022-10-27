import type { ButtonProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import type { RecentItem } from "~/models/item.server";

export type ItemLikeButtonProps = ButtonProps & {
  item: Pick<RecentItem, "likes">;
};

export default function ItemLikeButton(props: ItemLikeButtonProps) {
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
    <Button onClick={click} leftIcon={currentIcon}>
      {likes + Number(isLiked)}
    </Button>
  );
}
