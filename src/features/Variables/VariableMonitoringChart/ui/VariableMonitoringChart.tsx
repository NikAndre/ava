import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const data = [
  {
    desktop1: 100,
    date: "01.01.2024",
  },
  {
    desktop1: 85,
    date: "01.01.2024",
  },
  {
    desktop1: 76,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 115,
    date: "01.01.2024",
  },
  {
    desktop1: 105,
    date: "01.01.2024",
  },
  {
    desktop1: 120,
    date: "01.01.2024",
  },
  {
    desktop1: 101,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 100,
    date: "01.01.2024",
  },
  {
    desktop1: 85,
    date: "01.01.2024",
  },
  {
    desktop1: 76,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 115,
    date: "01.01.2024",
  },
  {
    desktop1: 105,
    date: "01.01.2024",
  },
  {
    desktop1: 120,
    date: "01.01.2024",
  },
  {
    desktop1: 101,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 100,
    date: "01.01.2024",
  },
  {
    desktop1: 85,
    date: "01.01.2024",
  },
  {
    desktop1: 76,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 115,
    date: "01.01.2024",
  },
  {
    desktop1: 105,
    date: "01.01.2024",
  },
  {
    desktop1: 120,
    date: "01.01.2024",
  },
  {
    desktop1: 101,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 100,
    date: "01.01.2024",
  },
  {
    desktop1: 85,
    date: "01.01.2024",
  },
  {
    desktop1: 76,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 115,
    date: "01.01.2024",
  },
  {
    desktop1: 105,
    date: "01.01.2024",
  },
  {
    desktop1: 120,
    date: "01.01.2024",
  },
  {
    desktop1: 101,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 100,
    date: "01.01.2024",
  },
  {
    desktop1: 85,
    date: "01.01.2024",
  },
  {
    desktop1: 76,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
  {
    desktop1: 115,
    date: "01.01.2024",
  },
  {
    desktop1: 105,
    date: "01.01.2024",
  },
  {
    desktop1: 120,
    date: "01.01.2024",
  },
  {
    desktop1: 101,
    date: "01.01.2024",
  },
  {
    desktop1: 55,
    date: "01.01.2024",
  },
];

export function VariableMonitoringChart() {
  return (
    <div style={{ width: "83%", height: "504px" }}>
      <ChartContainer
        style={{ width: "100%", height: "100%" }}
        config={chartConfig}
      >
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            right: 12,
            top: 12,
          }}
          style={{ width: "100%" }}
        >
          <CartesianGrid vertical={false} />
          <YAxis dataKey="desktop1" domain={["dataMin - 10", "dataMax + 10"]} />
          <XAxis
            dataKey="date"
            angle={-90}
            tickMargin={30}
            height={100}
            style={{ marginTop: "150px" }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop1"
            type="natural"
            stroke="#075985"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "#075985",
              stroke: "#075985",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
