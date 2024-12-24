import JsonRenderer from "./json_renderer";
import { TerminalLine } from "./terminal-line";
import contact from "@/public/contact.json";

// !TODO: meter las redes sociales y el github
export function Contact() {
  return (
    <TerminalLine prompt="cat contact.json">
      <JsonRenderer data={contact} />
    </TerminalLine>
  );
}
