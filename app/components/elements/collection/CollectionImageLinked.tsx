import type { BasicCollectionType } from "~/database/shapes/basicCollection";
import { generateCollectionUrl } from "~/utils/URLs";
import Link from "../shared/Link";
import type { CollectionImageProps } from "./CollectionImage";
import CollectionImage from "./CollectionImage";

export type CollectionImageLinkedProps = CollectionImageProps & {
  collection: Pick<BasicCollectionType, "id">;
};

export default function CollectionImageLinked(
  props: CollectionImageLinkedProps
) {
  return (
    <Link to={generateCollectionUrl(props.collection.id)}>
      <CollectionImage {...props} />
    </Link>
  );
}
