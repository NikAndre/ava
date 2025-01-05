import { TrendingUp } from "lucide-react"
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/shared/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}
export function AnaliticalLineChart({data}) {
  return (
    <div style={{width:'83%', height:"300px"}}>
        <ChartContainer style={{width:'100%', height:"100%"}} config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{

              right: 12,
              top: 12,
            }}
            style={{width:'100%'}}
          >
            <CartesianGrid vertical={false} />
            <YAxis padding={{ right: 100 }}/>
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
                r:6,
                fill: "#000000",
              }}
              activeDot={{
                r: 8,
              }}
            />
            <Line
              dataKey="desktop2"
              type="natural"
              stroke="#1A6B25"
              strokeWidth={3}
              dot={{
                r:6,
                fill: "#1A6B25",
              }}
              activeDot={{
                r: 8,
              }}
            />
            <Line
              dataKey="desktop3"
              type="natural"
              stroke="#0F9ED5"
              strokeWidth={3}
              dot={{
                r:6,
                fill: "#0F9ED5",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ChartContainer>
    </div>
  )
}
