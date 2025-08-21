"use client";

import { useEffect } from "react";

export default function InstagramEmbed({ postUrl }) {
  useEffect(() => {
    const script = document.querySelector(
      'script[src="//www.instagram.com/embed.js"]'
    );

    if (!script) {
      const newScript = document.createElement("script");
      newScript.async = true;
      newScript.src = "//www.instagram.com/embed.js";
      document.body.appendChild(newScript);
    }

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  // Hapus style yang membatasi lebar dari div ini
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          margin: "1px",
          padding: "0",
          width: "calc(100% - 2px)",
        }}
      >
        {/* Konten di dalam sini akan diganti oleh script Instagram */}
      </blockquote>
    </div>
  );
}
