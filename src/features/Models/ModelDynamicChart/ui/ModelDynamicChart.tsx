import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { PureComponent } from "react";

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text
        x={x}
        y={y - 10}
        dy={-4}
        fill={stroke}
        fontSize={14}
        fontWeight={500}
        textAnchor="middle"
      >
        {value + "%"}
      </text>
    );
  }
}

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {payload.map((entry, index: number) => (
        <li key={`item-${index}`}>{entry.value}</li>
      ))}
    </ul>
  );
};

export const ModelDynamicChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 0,
            left: 0,
          }}
          key={data.name}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey={"name"} axisLine={false} tickLine={false} />
          <YAxis
            dataKey={"pv"}
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey={"uv"}
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId={1}
            tick={false}
            domain={["dataMin - 5", "dataMax + 5"]}
            orientation={"right"}
            dataKey={"amt"}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Legend align={"center"} content={renderLegend} />
          <Bar
            barSize={30}
            dataKey="pv"
            fill="#ecc36c"
            label={{ position: "top" }}
          />
          <Bar
            barSize={30}
            dataKey="uv"
            fill="#64748b"
            label={{ position: "top" }}
          />
          <Line
            yAxisId={1}
            type="monotone"
            strokeWidth={3}
            dot={{ stroke: "#09090b", strokeWidth: 6 }}
            activeDot={{ stroke: "#09090b", strokeWidth: 2, r: 10 }}
            dataKey="amt"
            stroke="#09090b"
            label={<CustomizedLabel />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
