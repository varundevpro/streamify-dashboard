"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { revenueData } from "@/data"

export const description = "A donut chart"

const chartData = [
  { source: "subscriptions", value: 275, fill: "var(--color-subscriptions)" },
  { source: "ads", value: 200, fill: "var(--color-ads)" },
  { source: "merchandise", value: 187, fill: "var(--color-merchandise)" },
  { source: "sponsorships", value: 173, fill: "var(--color-sponsorships)" },
]

const chartConfig = {
  subscriptions: {
    label: revenueData[0].name,
  },
  ads: {
    label: revenueData[1].name,
    color: "hsl(var(--chart-1))",
  },
  merchandise: {
    label: revenueData[2].name,
    color: "hsl(var(--chart-2))",
  },
  sponsorships: {
    label: revenueData[3].name,
    color: "hsl(var(--chart-3))",
  }
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>Q1 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="source"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Grown by 12% from Q4 2023
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 3 months
        </div>
      </CardFooter>
    </Card>
  )
}
