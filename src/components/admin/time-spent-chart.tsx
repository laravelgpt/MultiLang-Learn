
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"

const chartData = [
  { topic: "Variables", time: 120 },
  { topic: "Loops", time: 180 },
  { topic: "Functions", time: 150 },
  { topic: "OOP", time: 220 },
  { topic: "DSA", time: 300 },
  { topic: "REST APIs", time: 250 },
]

const chartConfig = {
  time: {
    label: "Time (minutes)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function TimeSpentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Time Spent Per Topic</CardTitle>
        <CardDescription>Average time users spend on each major topic.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="topic"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `${value} min`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Bar dataKey="time" fill="var(--color-time)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
