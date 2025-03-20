import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart";
import {PureComponent} from "react";

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
                {value}
            </text>
        );
    }
}

export function AnaliticalLineChart({ data }) {
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
              left: -20,
          }}
          style={{ width: "100%" }}
        >
          <CartesianGrid vertical={false} />
          <YAxis padding={{ right: 100 }} />
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
            stroke="#000000"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#000000",
            }}
            activeDot={{
              r: 8,
            }}
            label={<CustomizedLabel />}
          />
          <Line
            dataKey="desktop2"
            type="natural"
            stroke="#1A6B25"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#1A6B25",
            }}
            activeDot={{
              r: 8,
            }}
            label={<CustomizedLabel />}
          />
          <Line
            dataKey="desktop3"
            type="natural"
            stroke="#0F9ED5"
            strokeWidth={3}
            dot={{
              r: 6,
              fill: "#0F9ED5",
            }}
            activeDot={{
              r: 8,
            }}
            label={<CustomizedLabel />}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
