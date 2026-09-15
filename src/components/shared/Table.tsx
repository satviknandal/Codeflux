import React from "react";

interface TableProps {
  headers: string[];
  data: string[][];
  columnWidths?: string[];
  className?: string;
}

const Table: React.FC<TableProps> = ({
  headers,
  data,
  columnWidths = [],
  className = "",
}) => {
  return (
    <table className={`table ${className}`}>
      <colgroup>
        {headers.map((_, index) => (
          <col
            key={index}
            style={{
              width: columnWidths[index] || "auto",
            }}
          />
        ))}
      </colgroup>

      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;