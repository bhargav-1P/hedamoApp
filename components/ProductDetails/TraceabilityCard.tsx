"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Award, User } from "lucide-react";

interface TraceabilityCardProps {
  traceability: {
    origin: string;
    batch: string;
    harvestDate: string;
    certification: string;
    farmer: string;
  };
}

export default function TraceabilityCard({ traceability }: TraceabilityCardProps) {
  const traceabilityItems = [
    { icon: MapPin, label: "Origin", value: traceability.origin },
    { icon: Calendar, label: "Harvest Date", value: traceability.harvestDate },
    { icon: Award, label: "Certification", value: traceability.certification },
    { icon: User, label: "Farmer", value: traceability.farmer },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Card className="border-0 shadow-md h-full">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-xl">
            <MapPin className="w-5 h-5 mr-2 text-orange-500" />
            Traceability
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {traceabilityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                    <div className="font-medium text-gray-900">{item.value}</div>
                  </div>
                </motion.div>
              );
            })}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-800">
                <strong>Batch ID:</strong> {traceability.batch}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}