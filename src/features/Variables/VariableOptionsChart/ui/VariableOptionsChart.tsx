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

const data = {
  id: "1",
  variableName: "paid base EOP",
  tags: "base, EOP",
  status: "опубликована",
  date: "Август 2024",
  username: "Vasya",
  chartData: [
    { month: "January", desktop1: 186 },
    { month: "February", desktop1: 286, desktop2: 286 },
    { month: "March", desktop2: 123 },
    { month: "April", desktop2: 286 },
    { month: "May", desktop2: 444 },
    { month: "June", desktop2: 346 },
    { month: "January", desktop2: 186 },
    { month: "February", desktop2: 286 },
    { month: "March", desktop2: 123 },
    { month: "April", desktop2: 286 },
    { month: "May", desktop2: 444 },
    { month: "June", desktop2: 346 },
  ],
};

export function VariablesOptionChart() {
  return (
    <div style={{ width: "83%", height: "250px" }}>
      <ChartContainer
        style={{ width: "100%", height: "100%", marginLeft: "-30px" }}
        config={chartConfig}
      >
        <LineChart
          accessibilityLayer
          data={data.chartData}
          margin={{
            right: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis />
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
            type="bump"
            stroke="#000000"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#000000",
            }}
            activeDot={{
              r: 8,
            }}
          />
          <Line
            dataKey="desktop2"
            type="natural"
            stroke="#000000"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#FFFFFF",
              strokeDasharray: "3",
            }}
            activeDot={{
              r: 8,
            }}
            strokeDasharray={"5 3"}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
