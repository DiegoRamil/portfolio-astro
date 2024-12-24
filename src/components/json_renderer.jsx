const JsonRenderer = ({ data }) => {
  return (
    <p>
      [
      <ol className="ml-4">
        {data?.map((item, idx) => (
          <li key={idx}>
            {"{ "}
            <br />
            <p className="ml-5">
              {Object.entries(item).map(([key, value], i) => (
                <span key={i}>
                  {key}: {value}
                  <br />
                </span>
              ))}
            </p>
            {idx === data.length - 1 ? "}" : "},"}
          </li>
        ))}
      </ol>
      ]
    </p>
  );
};

export default JsonRenderer;
