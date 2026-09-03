import React from "react";

export interface ImageProps {
  src: string | { src: string };
  alt?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  [key: string]: any;
}

export default function Image({
  src,
  alt = "",
  fill,
  priority,
  sizes,
  quality,
  className = "",
  style,
  ...props
}: ImageProps) {
  const imgSrc = typeof src === "string" ? src : src?.src || "";
  const fillStyles: React.CSSProperties = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }
    : {};

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={{ ...fillStyles, ...style }}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
