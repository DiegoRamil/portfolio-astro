interface TerminalLineProps {
  prompt?: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalLine({
  className,
  prompt = "$",
  children,
}: TerminalLineProps) {
  return (
    <div className={`mb-2 ${className}`}>
      <span className="text-blue-500">{prompt}</span> {children}
    </div>
  );
}
