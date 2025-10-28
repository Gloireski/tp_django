import axios from 'axios';

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
})

// Products
export const fetchProducts = () => API.get("products/")
export const fetchProductById = (id) => API.get(`products/${id}/`)

// Optionally handle categories
export const fetchCategories = () => API.get("categories/")
