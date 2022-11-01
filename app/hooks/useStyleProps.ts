import { useColorModeValue } from "@chakra-ui/react";

export default function useStyleProps() {
  return {
    boxBorder: {
      borderRadius: "xl",
      border: "1px",
      borderColor: useColorModeValue("gray.400", "black"),
      shadow: "md",
    },
    subtleBorder: {
      borderColor: useColorModeValue("gray.100", "gray.700"),
    },
  };
}
