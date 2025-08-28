export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  nutrition: {
    calories?: string;
    sugar?: string;
    protein?: string;
    carbs?: string;
    fiber?: string;
    fat?: string;
    saturatedFat?: string;
    cholesterol?: string;
    sodium?: string;
  };
  traceability: {
    origin: string;
    batch: string;
    harvestDate: string;
    certification: string;
    farmer: string;
  };
  price: string;
  originalPrice?: string;
  availability: string;
  reviews: Review[];
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}