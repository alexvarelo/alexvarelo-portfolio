import { AtomicGridItem } from "../../components/grid-item";

export const AtomicThumbnailItem = (id, title, thumbnail, year) => {
  return (
    <AtomicGridItem
      id={id}
      title={title}
      thumbnail={thumbnail}
      year={year}
    ></AtomicGridItem>
  );
};
