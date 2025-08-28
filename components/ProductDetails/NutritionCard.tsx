"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface NutritionCardProps {
  nutrition: { [key: string]: string };
}

export default function NutritionCard({ nutrition }: NutritionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Card className="border-0 shadow-md h-full">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-xl">
            <Activity className="w-5 h-5 mr-2 text-green-500" />
            Nutrition Facts
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(nutrition).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="text-center p-3 bg-gray-50 rounded-lg"
              >
                <div className="text-lg font-bold text-gray-900">{value}</div>
                <div className="text-sm text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}