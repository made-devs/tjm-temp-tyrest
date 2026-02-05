// filepath: src/lib/contentful.js
import { createClient } from "contentful";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

let client;

if (SPACE_ID && ACCESS_TOKEN) {
  client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });
} else {
  // Fallback ringan agar build tidak crash ketika ENV belum diset pada platform (mis. Vercel).
  // Fungsi ini meniru shape minimal yang dipakai di project: getEntries / getEntry.
  // Ketika ENV tersedia kembali, client asli akan dipakai.
  // NOTE: Untuk production, sebaiknya set CONTENTFUL_SPACE_ID & CONTENTFUL_ACCESS_TOKEN di Vercel.
  // Jika ingin hard-fail, ganti fallback dengan `throw new Error(...)`.
  console.warn(
    "[contentful] Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN — using mock client for build.",
  );

  client = {
    getEntries: async () => ({ items: [] }),
    getEntry: async () => null,
  };
}

export { client };
