import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import type { FieldCellType } from "~/database/shapes/fieldCell";
import moment from "moment";

export default function ItemField({ field }: { field: FieldCellType }) {
  const element = React.createElement(fieldComponents[field.type], { field });
  return <>{element}</>;
}

const fieldComponents = {
  INTEGER: IntegerField,
  STRING: StringField,
  MULTILINE: MultilineField,
  BOOLEAN: BooleanField,
  DATE: DateField,
  ENUM: EnumField,
};

function IntegerField({ field }: { field: FieldCellType }) {
  return <Tag>{field.value}</Tag>;
}

function StringField({ field }: { field: FieldCellType }) {
  return <Text>{field.value}</Text>;
}

function MultilineField({ field }: { field: FieldCellType }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MAX_LENGTH_DISPLAYED = 50;
  if (field.value.length > MAX_LENGTH_DISPLAYED) {
    return (
      <>
        <Text>
          {`${field.value.slice(0, MAX_LENGTH_DISPLAYED)}...  `}
          <Link onClick={onOpen} fontWeight="bold" color="gray.500">
            view more
          </Link>
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

function BooleanField({ field }: { field: FieldCellType }) {
  return <Tag>{field.value === "true" ? "Yes" : "No"}</Tag>;
}

function DateField({ field }: { field: FieldCellType }) {
  return <Tag>{moment(field.value).calendar()}</Tag>;
}

function EnumField({ field }: { field: FieldCellType }) {
  return <Tag>{field.value}</Tag>;
}
