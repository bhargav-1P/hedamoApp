"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface ImageCardProps {
  image: string;
  name: string;
  category: string;
  availability: string;
}

export default function ImageCard({ image, name, category, availability }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border-0 shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {name}
              </h2>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  <Tag className="w-3 h-3 mr-1" />
                  {category}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="bg-green-500/90 text-white border-green-500"
                >
                  {availability}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}