import { TerminalLine } from "./terminal-line";

export default function Exit() {
  return (
    <TerminalLine prompt="exit">
      Thanks for visiting! Closing session...
    </TerminalLine>
  );
}
