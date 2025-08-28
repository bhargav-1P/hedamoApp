"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onKnowMore: (product: Product) => void;
}

export default function ProductCard({ product, onKnowMore }: ProductCardProps) {
  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
              <Tag className="w-3 h-3 mr-1" />
              {product.category}
            </Badge>
          </div>
          {product.originalPrice && (
            <div className="absolute top-4 right-4">
              <Badge variant="destructive" className="bg-red-500 text-white">
                {Math.round(((parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))) / parseFloat(product.originalPrice.slice(1))) * 100)}% OFF
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
              {product.name}
            </h3>
            
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(averageRating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {averageRating.toFixed(1)} ({product.reviews.length} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600">
                {product.availability}
              </Badge>
            </div>
          </div>

          <div className="flex gap-3 mt-auto">
            <Button
              onClick={() => onKnowMore(product)}
              variant="outline"
              className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
            >
              Know More
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}