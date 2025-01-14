import React from "react";

export const ChartMisc = ({ name = "BU 2024", color = "#1A6B25" }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
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
        {name}
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
