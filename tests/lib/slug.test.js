import { describe, expect, it } from "vitest";
import { slugify } from "@/lib/slug";

describe("slugify", () => {
  it("mengubah teks menjadi slug huruf kecil", () => {
    expect(slugify("Paket Kaki Kaki Mobil")).toBe("paket-kaki-kaki-mobil");
  });

  it("menghapus karakter aksen dan simbol", () => {
    expect(slugify("Cr\u00e8me Br\u00fbl\u00e9e!!!")).toBe("creme-brulee");
  });

  it("menghapus strip berlebih di awal atau akhir", () => {
    expect(slugify("---  Test Slug  ---")).toBe("test-slug");
  });
});
