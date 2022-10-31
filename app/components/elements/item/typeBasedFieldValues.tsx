import {
  Button,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import type { FieldCellType } from "~/database/shapes/fieldCell";

export type TypedFieldProps = { field: FieldCellType };

export function IntegerField({ field }: TypedFieldProps) {
  return <Text>{field.value}</Text>;
}

export function StringField({ field }: TypedFieldProps) {
  return <Text>{field.value}</Text>;
}

export function BooleanField({ field }: TypedFieldProps) {
  return <Text>{field.value === "true" ? "Yes" : "No"}</Text>;
}

export function DateField({ field }: TypedFieldProps) {
  return <Text>{moment(field.value).calendar()}</Text>;
}

export function EnumField({ field }: TypedFieldProps) {
  return <Text>{field.value}</Text>;
}

export function MultilineField({ field }: TypedFieldProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MAX_LENGTH_DISPLAYED = 50;
  if (field.value.length > MAX_LENGTH_DISPLAYED) {
    return (
      <>
        <Text>
          {`${field.value.slice(0, MAX_LENGTH_DISPLAYED)}...  `}
          <ChakraLink onClick={onOpen} fontWeight="bold" color="gray.500">
            view more
          </ChakraLink>
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{field.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{field.value}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  return <Text>{field.value}</Text>;
}
