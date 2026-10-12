import { describe, expect, it } from "vitest";
import { blogSitemapEntries, noteDate, noteKeywords } from "./blog";

describe("blogSitemapEntries", () => {
  it("adds only blog addresses from Sitedesk, as full addresses with their dates", () => {
    const entries = [
      { path: "/blog/plot-checklist", lastModified: Date.UTC(2026, 9, 1) },
      { path: "/about", lastModified: 1 },
      { path: "//evil.example/x", lastModified: 1 },
    ];
    expect(blogSitemapEntries(entries)).toEqual([
      { url: "https://www.ynlrealtors.in/blog/plot-checklist", lastModified: new Date(Date.UTC(2026, 9, 1)), changeFrequency: "monthly", priority: 0.6 },
    ]);
  });
});

describe("noteKeywords", () => {
  it("puts the focus keyword first, then the tags, without repeats or blanks", () => {
    expect(noteKeywords({ focusKeyword: " plot in Faridabad ", tags: ["land", "plot in Faridabad", ""] })).toEqual(["plot in Faridabad", "land"]);
    expect(noteKeywords({ tags: [] })).toEqual([]);
  });
});

describe("noteDate", () => {
  it("reads as an Indian date in India's time zone", () => {
    expect(noteDate(Date.UTC(2026, 9, 1, 20, 0))).toBe("2 October 2026"); // 1:30 am on the 2nd in India
  });
});
