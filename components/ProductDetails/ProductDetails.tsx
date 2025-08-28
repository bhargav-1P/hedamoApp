"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import ImageCard from "./ImageCard";
import FeaturesCard from "./FeaturesCard";
import NutritionCard from "./NutritionCard";
import TraceabilityCard from "./TraceabilityCard";
import PricingCard from "./PricingCard";
import ReviewsCard from "./ReviewsCard";

interface ProductDetailsProps {
  product: Product | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ProductDetails({ 
  product, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious 
}: ProductDetailsProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
            <h1 className="text-2xl font-bold text-gray-900">Product Details</h1>
            <div className="flex items-center gap-2">
              {hasPrevious && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onPrevious}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              )}
              {hasNext && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onNext}
                  className="rounded-full w-10 h-10 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="rounded-full w-10 h-10 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image Card - Full width on mobile, spans 2 columns on desktop */}
              <div className="md:col-span-2">
                <ImageCard
                  image={product.image}
                  name={product.name}
                  category={product.category}
                  availability={product.availability}
                />
              </div>

              {/* Pricing Card */}
              <div>
                <PricingCard
                  price={product.price}
                  originalPrice={product.originalPrice}
                  availability={product.availability}
                />
              </div>

              {/* Features Card */}
              <div>
                <FeaturesCard features={product.features} />
              </div>

              {/* Nutrition Card */}
              <div>
                <NutritionCard nutrition={product.nutrition} />
              </div>

              {/* Traceability Card */}
              <div>
                <TraceabilityCard traceability={product.traceability} />
              </div>

              {/* Reviews Card - Full width */}
              <ReviewsCard reviews={product.reviews} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}