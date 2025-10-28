// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductById } from "../services/api"



/**
 * Custom hook to fetch products from backend with optional filters.
 * @param {Object} filters - { search: string, category: string, maxPrice: number }
 */
export const useProducts = (filters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters),
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