import { readFileSync } from "node:fs";
import path from "node:path";

function getHomepageMarkup() {
  const html = readFileSync(path.join(process.cwd(), "index.html"), "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<!-- Logic -->/i);

  if (!bodyMatch) {
    throw new Error("Could not extract homepage markup from index.html.");
  }

  return bodyMatch[1]
    .replace(/<!-- Navigation -->[\s\S]*?<\/nav>/i, "")
    .trim();
}

export default function Home() {
  return (
    <main dangerouslySetInnerHTML={{ __html: getHomepageMarkup() }} />
  );
}
