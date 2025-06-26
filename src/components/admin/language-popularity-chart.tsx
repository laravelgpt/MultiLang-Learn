
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"

export const languagePopularityData = [
  { language: "Python", users: 5210 },
  { language: "JavaScript", users: 4890 },
  { language: "Java", users: 3120 },
  { language: "C++", users: 2540 },
  { language: "Go", users: 1980 },
  { language: "Rust", users: 1530 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig

export function LanguagePopularityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Language Popularity</CardTitle>
        <CardDescription>Number of users enrolled per language.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={languagePopularityData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="language"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
             <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar dataKey="users" fill="var(--color-users)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
