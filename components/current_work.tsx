import { TerminalLine } from "./terminal-line";
import currentWork from "@/public/current_work.json";

export default function CurrentWork() {
  return (
    <TerminalLine prompt="cat work.txt">
      Currently working at{" "}
      <a
        className="text-indigo-500 border-indigo-500 border-b-2"
        href={currentWork.url}
        target="_blank"
        rel="noopener"
      >
        {currentWork.name}
      </a>
    </TerminalLine>
  );
}
