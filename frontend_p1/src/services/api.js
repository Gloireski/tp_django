import axios from 'axios';

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch products with optional filters

export const fetchProducts = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.search) params.append("search", filters.search);
  if (filters.category && filters.category !== "All") params.append("category", filters.category);
  if (filters.maxPrice) params.append("max_price", filters.maxPrice);

  const { data } = await API.get("products/", { params });
  return data.products;
};
// Fetch single product by ID
export const fetchProductById = async (id) => {
  const { data } = await API.get(`products/${id}/`);
  return data.product;
};


// Categories
export const fetchCategories = async () => {
  const { data } = await API.get("categories/"); // Make sure this endpoint exists in Django
  return data;
};

