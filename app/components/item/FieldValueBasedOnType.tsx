import React from "react";
import type { TypedFieldProps } from "./typeBasedFieldValues";
import {
  BooleanField,
  DateField,
  EnumField,
  IntegerField,
  MultilineField,
  StringField,
} from "./typeBasedFieldValues";

export default function ItemFieldBasedOnType({ field }: TypedFieldProps) {
  const element = React.createElement(fieldComponents[field.type], { field });
  // Fragment instead of direct return to explicitly show
  // that stuff can be added to this strange function
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
