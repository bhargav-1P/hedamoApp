"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Leaf, ShoppingBag } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";
import productsData from "@/data/products.json";

export default function Home() {
  const [products] = useState<Product[]>(productsData);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const handleKnowMore = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleNextProduct = () => {
    if (selectedProduct) {
      const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
      const nextIndex = (currentIndex + 1) % products.length;
      setSelectedProduct(products[nextIndex]);
    }
  };

  const handlePreviousProduct = () => {
    if (selectedProduct) {
      const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
      const previousIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
      setSelectedProduct(products[previousIndex]);
    }
  };

  const currentProductIndex = selectedProduct ? products.findIndex(p => p.id === selectedProduct.id) : -1;
  const hasNext = currentProductIndex < products.length - 1;
  const hasPrevious = currentProductIndex > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-green-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 rounded-xl p-2">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hedamo</h1>
                <p className="text-sm text-gray-600">Premium Organic Products</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                {filteredProducts.length} Products Available
              </div>
              <ShoppingBag className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Premium
            <span className="text-green-600 block">Organic Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the finest selection of organic honey, nuts, and oils sourced directly from 
            certified farms across India. Pure, natural, and traceable.
          </p>
        </motion.div>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search for organic products..."
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid 
            products={filteredProducts} 
            onKnowMore={handleKnowMore} 
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search terms or browse all products</p>
          </motion.div>
        )}
      </main>

      {/* Product Details Modal */}
      <ProductDetails
        product={selectedProduct}
        onClose={handleCloseDetails}
        onNext={handleNextProduct}
        onPrevious={handlePreviousProduct}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 rounded-xl p-2">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Hedamo</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Bringing you the finest organic products with complete traceability and 
                sustainable farming practices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Organic Honey</li>
                <li>Premium Nuts</li>
                <li>Cold-Pressed Oils</li>
                <li>Seasonal Specials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Sustainability</li>
                <li>Certifications</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hedamo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}