import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ReferenceLine,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart";
const chartData = [
  { month: "paid base eop (BL)", visitors: 100 },
  { month: "pb prev m", visitors: 0 },
  { month: "inflow", visitors: -1 },
  { month: "outflow", visitors: 15 },
  { month: "paid base eop (EL)", visitors: 114 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
};

export function VariableFactorBarChart() {
  return (
    <div style={{ width: "83%", height: "300px" }}>
      <ChartContainer
        style={{ width: "100%", height: "100%" }}
        config={chartConfig}
      >
        <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
            }}
        >
          <CartesianGrid vertical={false} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel hideIndicator />}
          />

          <YAxis reversed={true} />
          <Bar dataKey="visitors">
            <LabelList position="top" dataKey="month" fillOpacity={1} />
            {chartData.map((item) => (
              <Cell
                key={item.month}
                width={150}
                fill={
                  item.visitors > 0
                    ? "hsl(var(--chart-3))"
                    : "hsl(var(--chart-1))"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
