// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
})

const fetchProducts = async ({ queryKey }) => {
  const [_key, filters] = queryKey
  const params = new URLSearchParams()

  if (filters?.search) params.append("search", filters.search)
  if (filters?.category && filters.category !== "All") params.append("category", filters.category)
  if (filters?.maxPrice) params.append("max_price", filters.maxPrice)

  const { data } = await API.get("products/", { params })
  return data
}

export const useProducts = (filters = {}) =>
  useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  })
