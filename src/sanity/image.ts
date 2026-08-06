import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: any) {
  if (!source) return null;
  return builder.image(source);
}
