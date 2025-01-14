import React from "react";
import { Trash2 } from "lucide-react";

export const Tag = ({ isDeletable = false, title }) => {
  return (
    <li
      style={{
        padding: "11px 17px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        backgroundColor: "#F1F5F9",
        width: "fit-content",
        borderRadius: "6px",
      }}
    >
      <p>{title}</p>
      {isDeletable && <Trash2 />}
    </li>
  );
};
