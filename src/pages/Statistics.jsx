import Layout from "@/components/Layout.jsx";
import {ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import StatisticCard from "@/components/StatisticCard.jsx";
import { motion } from "framer-motion";

export default function Statistics() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <p className="font-medium text-xl uppercase">Statistics</p>
      </div>
      <motion.div
        className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 gap-10"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ staggerChildren: 0.2 }}
      >
        {[...Array(5)].map((_, index) => (
          <motion.div key={index} variants={cardVariants}>
            <StatisticCard />
          </motion.div>
        ))}
      </motion.div>

        <ChartContainer config={chartConfig} className="w-full h-[350px] mt-20">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
            <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
          </BarChart>
        </ChartContainer>
    </Layout>
  );
}
