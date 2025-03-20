export const ChartMisc = ({ title = "BU 2024", color = "#1A6B25" }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        padding: '8px 0',
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "60%",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </p>
      <div
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "18px",
          backgroundColor: `${color}`,
          boxSizing: "border-box",
        }}
      ></div>
    </li>
  );
};
