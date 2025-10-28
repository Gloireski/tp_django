import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

const fetchCategories = async () => {
  const { data } = await API.get("categories/"); // Make sure this endpoint exists in Django
  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
