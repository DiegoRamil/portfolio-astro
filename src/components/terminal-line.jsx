const TerminalLine = ({ className = "", prompt = "$", heading, children }) => {
  return (
    <div className={`mb-2 ${className}`}>
      {heading ? (
        <h2 className="inline text-base font-normal text-blue-500">
          <span className="sr-only">{heading}: </span>
          {prompt}
        </h2>
      ) : (
        <span className="text-blue-500">{prompt}</span>
      )}{" "}
      {children}
    </div>
  );
};

export default TerminalLine;
