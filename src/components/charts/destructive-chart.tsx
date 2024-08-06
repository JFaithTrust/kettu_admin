'use client'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Area, AreaChart, CartesianGrid, XAxis} from "recharts";
import {TrendingUp} from "lucide-react";

const DestructiveChart = ({data}: {data: any}) => {

  const chartConfig = {
    desktop: {
      label: "Mobile",
      color: "var(--chart-2)",
    }
  } satisfies ChartConfig

  return (
    <ChartContainer config={chartConfig} className={"h-20 w-full"}>
      <AreaChart
        accessibilityLayer
        data={data}
        // margin={{
        //   left: 12,
        //   right: 12,
        // }}
      >
        {/*<CartesianGrid vertical={true} />*/}
        {/*<XAxis*/}
        {/*  dataKey="month"*/}
        {/*  tickLine={false}*/}
        {/*  axisLine={false}*/}
        {/*  tickMargin={8}*/}
        {/*  tickFormatter={(value) => value.slice(0, 3)}*/}
        {/*/>*/}
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--chart-2)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--chart-2)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.2}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Total earning</CardTitle>
    //     <h1>2,420,000 C</h1>
    //     <CardDescription>
    //       Showing total visitors for the last 6 months
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //   </CardContent>
    //   <CardFooter>
    //     <div className="flex w-full items-start gap-2 text-sm">
    //       <div className="grid gap-2">
    //         <div className="flex items-center gap-2 font-medium leading-none">
    //           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
    //         </div>
    //         <div className="flex items-center gap-2 leading-none text-muted-foreground">
    //           January - June 2024
    //         </div>
    //       </div>
    //     </div>
    //   </CardFooter>
    // </Card>
  );
};

export default DestructiveChart;
