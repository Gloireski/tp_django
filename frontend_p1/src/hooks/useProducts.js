// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch products with optional filters
const fetchProducts = async ({ queryKey }) => {
  const [_key, filters] = queryKey;
  const params = {};

  if (filters?.search) params.search = filters.search;
  if (filters?.category && filters.category !== "All") params.category = filters.category;
  if (filters?.maxPrice) params.max_price = filters.maxPrice;

  const { data } = await API.get("products/", { params });
  return data;
};
// Fetch single product by ID
const fetchProductById = async (id) => {
  const { data } = await API.get(`products/${id}/`);
  return data;
};


/**
 * Custom hook to fetch products from backend with optional filters.
 * @param {Object} filters - { search: string, category: string, maxPrice: number }
 */
export const useProducts = (filters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    refetchOnWindowFocus: false,
  });
};

// Hook to fetch a single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};