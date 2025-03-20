import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  YAxis,
  ReferenceLine,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart";
const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
};
export function VariableAnaliticalBarChart() {
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
          <YAxis />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel hideIndicator />}
          />
          <ReferenceLine y={0} />
          <Bar dataKey="visitors">
            <LabelList position="top" dataKey="visitors" fillOpacity={1} fill={'black'} />
            {chartData.map((item) => (
              <Cell
                key={item.month}
                width={30}
                fill={
                  item.visitors > 0
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
