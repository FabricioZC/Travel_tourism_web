import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff5a00",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "18px",
            fontWeight: "800",
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          T
        </div>
      </div>
    ),
    { ...size }
  );
}
