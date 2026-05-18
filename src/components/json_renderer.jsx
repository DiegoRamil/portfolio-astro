const formatJsonValue = (value) => {
  if (typeof value === "string") return `'${value}'`;
  return String(value);
};

const JsonRenderer = ({ data }) => {
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
                  {key}: {formatJsonValue(value)}
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
