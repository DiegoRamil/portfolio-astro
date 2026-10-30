const formatJsonValue = (value, linkRel) => {
  if (typeof value === "string" && value.startsWith("https://")) {
    return (
      <>
        '
        <a
          href={value}
          target="_blank"
          rel={linkRel}
          className="text-indigo-500 border-indigo-500 border-b-2"
        >
          {value}
        </a>
        '
      </>
    );
  }
  if (typeof value === "string") return `'${value}'`;
  return String(value);
};

const JsonRenderer = ({ data, linkRel = "noopener" }) => {
  return (
    <div>
      [
      <ol className="ml-4">
        {data?.map((item, idx) => (
          <li key={idx}>
            {"{ "}
            <br />
            <div className="ml-5">
              {Object.entries(item).map(([key, value], i) => (
                <span key={i}>
                  {key}: {formatJsonValue(value, linkRel)}
                  <br />
                </span>
              ))}
            </div>
            {idx === data.length - 1 ? "}" : "},"}
          </li>
        ))}
      </ol>
      ]
    </div>
  );
};

export default JsonRenderer;
