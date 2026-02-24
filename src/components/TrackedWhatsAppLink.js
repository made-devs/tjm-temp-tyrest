"use client";

import { track } from "@vercel/analytics";

export default function TrackedWhatsAppLink({
  href,
  eventName = "whatsapp_click",
  eventProps,
  target = "_blank",
  rel,
  onClick,
  children,
  ...rest
}) {
  const safeRel =
    rel || (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      onClick={(e) => {
        try {
          track(eventName, {
            ...(eventProps || {}),
            href: typeof href === "string" ? href.slice(0, 200) : undefined,
          });
        } catch {
          // no-op
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
