"use client";

import { useState } from "react";
import {
  FAQ_KAKI_KAKI,
  FAQ_SHOCKBREAKER,
  FAQ_STEERING,
} from "@/components/layanan/detail/intentData";

export default function ServiceFAQ({ slug }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isRackSteerIntentPage =
    slug === "paket-steering" || slug === "paket-racksteer-ultimate";
  const isShockbreakerIntentPage = slug === "paket-shockbreaker";

  if (
    !slug.includes("kaki-kaki") &&
    !slug.includes("undercarriage") &&
    !isRackSteerIntentPage &&
    !isShockbreakerIntentPage
  ) {
    return null;
  }

  const faqs = isRackSteerIntentPage
    ? FAQ_STEERING
    : isShockbreakerIntentPage
      ? FAQ_SHOCKBREAKER
      : FAQ_KAKI_KAKI;

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-teko text-3xl font-bold uppercase tracking-wider text-white sm:text-4xl md:text-5xl">
            Pertanyaan Umum{" "}
            <span className="text-red-600">
              {isRackSteerIntentPage
                ? "Seputar Rack Steer & Steering"
                : isShockbreakerIntentPage
                  ? "Seputar Shockbreaker Mobil"
                  : "Seputar Kaki-Kaki"}
            </span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-800 rounded-xl bg-[#111] shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left p-5 focus:outline-none flex justify-between items-center hover:bg-gray-900 transition-colors"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="pr-4 font-jakarta text-sm font-semibold leading-6 text-gray-200 sm:text-base md:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`text-red-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="border-t border-gray-800 bg-[#0a0a0a] p-5 font-jakarta text-sm leading-7 text-gray-400 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
