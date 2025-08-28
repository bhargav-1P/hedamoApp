"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Share } from "lucide-react";

interface PricingCardProps {
  price: string;
  originalPrice?: string;
  availability: string;
}

export default function PricingCard({ price, originalPrice, availability }: PricingCardProps) {
  const discount = originalPrice 
    ? Math.round(((parseFloat(originalPrice.slice(1)) - parseFloat(price.slice(1))) / parseFloat(originalPrice.slice(1))) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Pricing & Actions</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold text-green-600">{price}</span>
              {originalPrice && (
                <span className="text-xl text-gray-400 line-through">{originalPrice}</span>
              )}
            </div>
            
            {discount > 0 && (
              <Badge variant="destructive" className="text-lg px-3 py-1">
                Save {discount}%
              </Badge>
            )}

            <Badge 
              variant="outline" 
              className="text-green-600 border-green-600 font-medium"
            >
              {availability}
            </Badge>

            <div className="space-y-3 pt-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}