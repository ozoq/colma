import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import autosize from "autosize";
import moment from "moment";
import { useEffect, useRef } from "react";
import { BiSend } from "react-icons/bi";
import type { FullItemType } from "~/database/shapes/fullItem";

const comments = [
  {
    authorName: "jake",
    date: "24/06/2022",
    text: "asdfasdfasdf",
    id: 1,
  },
  {
    authorName: "jake2",
    date: "26/08/2022",
    text: "aaaaaaaaaaaaaaaaaaaaaaaaaaa b b b",
    id: 2,
  },
];

export type CommentsProps = { item: FullItemType };

export default function Comments({ item }: CommentsProps) {
  const commentTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!commentTextareaRef.current) return;
    autosize(commentTextareaRef.current);
    const autosized = commentTextareaRef.current;
    return () => {
      autosize.destroy(autosized);
    };
  }, []);

  return (
    <Box>
      <Box pl={5}>
        <Text
          size="lg"
          fontWeight="medium"
          color={useColorModeValue("gray.800", "gray.200")}
          mb={4}
        >
          <Text as="b">COMMENTS </Text>({comments.length})
        </Text>
        <Flex gap={4} px={2} mb={8}>
          <Flex boxSize="40px" alignItems="center">
            <Avatar size="sm" borderRadius={"lg"} />
          </Flex>
          <Textarea
            ref={commentTextareaRef}
            placeholder="Write a comment.."
            rows={1}
          />
          <Button>
            <Icon as={BiSend} />
          </Button>
        </Flex>
        <Stack px={2}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function Comment({ comment }: { comment: typeof comments[0] }) {
  return (
    <Flex gap={4}>
      <Avatar size="sm" borderRadius={"lg"} />
      <Box>
        <Text fontWeight="bold">{comment.authorName}</Text>
        <Text>{comment.text}</Text>
        <Text fontWeight="medium" fontSize="sm" color="gray.400">
          {moment(comment.date, "DD/MM/YYYY").fromNow()}
        </Text>
      </Box>
    </Flex>
  );
}
