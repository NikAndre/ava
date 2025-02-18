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
  },
  {
    desktop1: 85,
  },
  {
    desktop1: 76,
  },
  {
    desktop1: 55,
  },
  {
    desktop1: 115,
  },
  {
    desktop1: 105,
  },
  {
    desktop1: 120,
  },
  {
    desktop1: 101,
  },
  {
    desktop1: 55,
  },
  {
    desktop1: 95,
  },
  {
    desktop1: 98,
  },
  {
    desktop1: 100,
  },
];

export function VariableCompareLineChart() {
  return (
    <div style={{ width: "83%", height: "300px" }}>
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
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34C759" stopOpacity={1} />
              <stop offset="95%" stopColor="#FF3B30" stopOpacity={1} />
            </linearGradient>
          </defs>
          <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop1"
            type="natural"
            stroke="url(#colorUv)"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#000000",
              stroke: "#000000",
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
