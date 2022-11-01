import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import { BiSend } from "react-icons/bi";
import type { FullItemType } from "~/database/shapes/fullItem";
import AutosizedTextarea from "../common/AutosizedTextarea";

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
          <AutosizedTextarea placeholder="Write a comment.." rows={1} />
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
