import {
  ComposedChart,
  Bar,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Scatter,
} from "recharts";

const chartData = [
  {
    name: "paid base eop (BL)",
    visitors1: 50,
    visitors2: 90,
    fullfilled: 98,
    default: 50,
  },
  {
    name: "pb prev m",
    visitors1: 40,
    visitors2: 80,
    fullfilled: 88,
    default: 50,
  },
];

const renderCustomizedLabel = (props) => {
  const { value, x, y } = props;

  return (
    <g>
      <text
        x={x + 8}
        y={y - 15}
        fill="#a1a1a1"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value + "%"}
      </text>
    </g>
  );
};

export function PeriodModelChart() {
  return (
    <div style={{ width: "83%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={chartData}
          margin={{
            top: 40,
            right: 40,
            bottom: 20,
            left: 20,
          }}
          barGap={50}
          style={{
            position: "relative",
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey={"name"} />
          <Bar
            style={{ marginRight: "20px" }}
            dataKey="visitors1"
            barSize={"10%"}
            fill="#edcd58"
          >
            <LabelList dataKey={"visitors1"} position="top" />
          </Bar>
          <Scatter
            style={{
              position: "absolute",
            }}
            dataKey="default"
          >
            <LabelList
              dataKey={"fullfilled"}
              position="top"
              content={renderCustomizedLabel}
            />
          </Scatter>
          <Bar dataKey="visitors2" barSize={"10%"} fill="#3b3e5c">
            <LabelList dataKey={"visitors2"} position="top" />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
