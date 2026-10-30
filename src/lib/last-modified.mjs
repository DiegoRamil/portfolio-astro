import { execFileSync } from "node:child_process";

const CONTENT_PATHS = ["src/data", "src/components", "src/pages"];

// Date of the last commit that changed visible content, so dateModified and
// sitemap lastmod only move when the page actually changes.
export const getContentLastModified = () => {
  try {
    const date = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...CONTENT_PATHS], {
      encoding: "utf8",
    }).trim();
    if (date) return new Date(date);
  } catch {
    // git is unavailable (e.g. building from a tarball)
  }
  return new Date();
};
