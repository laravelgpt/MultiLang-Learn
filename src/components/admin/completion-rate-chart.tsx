"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"

const chartData = [
  { lesson: "Variables", completionRate: 95 },
  { lesson: "Data Types", completionRate: 92 },
  { lesson: "Operators", completionRate: 88 },
  { lesson: "Conditionals", completionRate: 82 },
  { lesson: "Loops", completionRate: 75 },
  { lesson: "Functions", completionRate: 70 },
  { lesson: "OOP Basics", completionRate: 60 },
  { lesson: "DSA Intro", completionRate: 45 },
]

const chartConfig = {
  completionRate: {
    label: "Completion Rate",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function CompletionRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Completion Rates</CardTitle>
        <CardDescription>Percentage of users completing each topic.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="lesson"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="completionRate" fill="var(--color-completionRate)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
