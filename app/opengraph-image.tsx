import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Muhammad Hammad - Software Engineer & Business Automation Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#09090b",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 60%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 60%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#3b82f6",
              marginBottom: "24px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Portfolio
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.1,
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            Muhammad Hammad
          </h1>

          <p
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Software Engineer & Business Automation Specialist
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "16px",
            }}
          >
            {["Next.js", "React", "GoHighLevel", "ePADS"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#f8fafc",
                  fontSize: "18px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            color: "#a1a1aa",
            fontSize: "20px",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
