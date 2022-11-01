import type { BoxProps } from "@chakra-ui/react";
import { CustomTag } from "~/components/common/CustomTag";
import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import { generateCollectionUrl } from "~/utils/URLs";
import { ImageBox, ImageBoxRow } from "../common/ImageBox";
import Link from "../common/Link";

export type CollectionImageProps = BoxProps & {
  collection: BasicCollectionType;
};

export default function CollectionImage(props: CollectionImageProps) {
  const { imageUrl, topic, itemsCount, id } = props.collection;
  return (
    <Link to={generateCollectionUrl(id)}>
      <ImageBox imageUrl={imageUrl} {...props}>
        <ImageBoxRow rowPosition="tr">
          <CustomTag tagVariant="solid">{topic}</CustomTag>
          <CustomTag tagVariant="solid">{itemsCount} items</CustomTag>
        </ImageBoxRow>
      </ImageBox>
    </Link>
  );
}
