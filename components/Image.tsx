import React, { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import classNames from "classnames";

type ImgProps = Pick<
  ImageProps,
  | "alt"
  | "src"
  | "className"
  | "height"
  | "layout"
  | "objectFit"
  | "objectPosition"
  | "placeholder"
  | "priority"
  | "width"
>;

const Image: React.FC<ImgProps> = (props) => {
  const {
    className,
    alt,
    src,
    width,
    height,
    layout,
    objectFit,
    objectPosition,
    ...rest
  } = props;
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  if (!src) return null;

  const css = layout === "responsive" ? { width: "100%", height: "auto" } : {};
  return (
    <NextImage
      className={classNames(
        className,
        isReady ? "scale-100  blur-0" : "scale-120 blur-xl",
        "bg-gray-400 transition duration-1000 object-cover"
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        ...css,
        objectPosition,
        objectFit: (objectFit as never) ?? "cover",
      }}
      {...rest}
      fill={layout === "fill"}
      onLoadingComplete={onLoadCallback}
    />
  );
};

export default Image;
