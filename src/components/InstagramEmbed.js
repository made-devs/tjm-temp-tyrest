"use client";

import { useEffect } from "react";

// Ditambahkan prop `hideCaption` untuk kontrol tampilan caption
export default function InstagramEmbed({ postUrl, hideCaption = false }) {
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

    // Pastikan window.instgrm ada sebelum memproses
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  const blockquoteProps = {
    className: "instagram-media",
    "data-instgrm-permalink": postUrl,
    "data-instgrm-version": "14",
    style: {
      background: "#FFF",
      border: "0",
      borderRadius: "3px",
      margin: "1px",
      padding: "0",
      width: "calc(100% - 2px)",
    },
  };

  // Hanya tambahkan atribut 'data-instgrm-captioned' jika hideCaption false
  if (!hideCaption) {
    blockquoteProps["data-instgrm-captioned"] = "";
  }

  return (
    <div>
      <blockquote {...blockquoteProps}>
        {/* Konten di dalam sini akan diganti oleh script Instagram */}
      </blockquote>
    </div>
  );
}
