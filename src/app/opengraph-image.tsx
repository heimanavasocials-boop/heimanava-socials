import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Heimanava Socials — Agence digitale à Tahiti, Polynésie française";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bugaki = await readFile(join(process.cwd(), "src/fonts/BugakiRegular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#3d0814",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 64,
            display: "flex",
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#ce4760",
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Bugaki",
            fontSize: 104,
            color: "#f1fec6",
            letterSpacing: 1,
          }}
        >
          Heimanava Socials
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Bugaki",
            marginTop: 28,
            fontSize: 32,
            color: "#ce4760",
            fontWeight: 600,
          }}
        >
          Communication digitale pour les PME de Polynésie française
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Bugaki",
            marginTop: 44,
            fontSize: 24,
            color: "rgba(241, 254, 198, 0.7)",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Tahiti · Polynésie française
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bugaki",
          data: bugaki,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
