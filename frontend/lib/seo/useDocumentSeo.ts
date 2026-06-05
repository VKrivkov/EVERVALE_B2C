"use client";

import { useEffect } from "react";

export type DocumentSeoInput = {
  title?: string | null;
  description?: string | null;
  keywords?: string[] | null;
  robots?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  canonicalUrl?: string | null;
};

const MANAGED_ATTR = "data-seo-managed";

function upsertMeta(attr: "name" | "property", key: string, content?: string | null) {
  if (typeof document === "undefined") return;
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!content) {
    if (el?.getAttribute(MANAGED_ATTR) === "true") el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href?: string | null) {
  if (typeof document === "undefined") return;
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!href) {
    if (el?.getAttribute(MANAGED_ATTR) === "true") el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function resolveCanonical(canonical?: string | null) {
  if (!canonical) return undefined;
  if (/^https?:\/\//i.test(canonical)) return canonical;
  if (typeof window === "undefined") return canonical;
  return `${window.location.origin}${canonical.startsWith("/") ? "" : "/"}${canonical}`;
}

export function useDocumentSeo(input: DocumentSeoInput | null | undefined) {
  useEffect(() => {
    if (typeof document === "undefined" || !input) return;

    const previousTitle = document.title;
    if (input.title) document.title = input.title;

    upsertMeta("name", "description", input.description ?? undefined);
    upsertMeta("name", "robots", input.robots ?? undefined);
    upsertMeta(
      "name",
      "keywords",
      input.keywords && input.keywords.length > 0
        ? input.keywords.join(", ")
        : undefined,
    );

    upsertMeta("property", "og:title", input.ogTitle ?? input.title ?? undefined);
    upsertMeta(
      "property",
      "og:description",
      input.ogDescription ?? input.description ?? undefined,
    );
    upsertMeta("property", "og:image", input.ogImage ?? undefined);
    upsertMeta("property", "og:type", "article");

    upsertMeta("name", "twitter:card", input.ogImage ? "summary_large_image" : "summary");
    upsertMeta(
      "name",
      "twitter:title",
      input.ogTitle ?? input.title ?? undefined,
    );
    upsertMeta(
      "name",
      "twitter:description",
      input.ogDescription ?? input.description ?? undefined,
    );
    upsertMeta("name", "twitter:image", input.ogImage ?? undefined);

    upsertLink("canonical", resolveCanonical(input.canonicalUrl));

    return () => {
      document.title = previousTitle;
      document.head
        .querySelectorAll(`[${MANAGED_ATTR}="true"]`)
        .forEach((el) => el.remove());
    };
  }, [
    input?.title,
    input?.description,
    input?.robots,
    input?.ogTitle,
    input?.ogDescription,
    input?.ogImage,
    input?.canonicalUrl,
    input?.keywords?.join("|"),
  ]);
}
