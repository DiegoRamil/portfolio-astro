import JsonRenderer from "./json_renderer";
import { TerminalLine } from "./terminal-line";
import experience from "@/public/experience.json";

export default function Experience() {
  return (
    <TerminalLine prompt="cat experience.json">
      <JsonRenderer data={experience} />
    </TerminalLine>
  );
}
