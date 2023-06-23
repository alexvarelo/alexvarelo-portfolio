import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join("  ");
}

const BlurImage = ({ img, originalSize }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt=""
      src={img}
      layout="fill"
      objectFit={originalSize ? "scale-down" : "cover"}
      className={cn(
        "group-hover:opacity-75 duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
      blurDataURL
      placeholder="blur"
    />
  );
};

export default BlurImage;
