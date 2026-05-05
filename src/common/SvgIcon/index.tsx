import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  const extension = src.split(".").pop()?.toLowerCase();
  const folder = extension === "png" ? "png" : "svg";

  return (
    <img
      src={`/img/${folder}/${src}`}
      alt={src}
      width={width}
      height={height}
      style={{
        width,
        height: "auto",
        display: "block",
        objectFit: "contain",
        maxWidth: "100%",
      }}
    />
  );
};
