const TerminalLine = ({ className = "", prompt = "$", children }) => {
  return (
    <div className={`mb-2 ${className}`}>
      <span className="text-blue-500">{prompt}</span> {children}
    </div>
  );
};

export default TerminalLine;
