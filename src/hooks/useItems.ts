import { useState, useEffect } from "react";
import { getItems } from "../services/api";
import { filterItems } from "../utils/search";
import { getPaginatedItems, getTotalPages } from "../utils/pagination";
import type { ApiItem } from "../types";

interface UseItemsReturn {
  items: ApiItem[];
  filteredItems: ApiItem[];
  paginatedItems: ApiItem[];
  isLoading: boolean;
  error: string;
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  loadItems: () => Promise<void>;
}

export const useItems = (itemsPerPage: number = 20): UseItemsReturn => {
  const [items, setItems] = useState<ApiItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<ApiItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const loadItems = async () => {
    try {
      setIsLoading(true);
      setError("");
      const data = await getItems();
      setItems(data);
    } catch (error) {
      setError("Error loading items");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    const filtered = filterItems(items, searchTerm);
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [items, searchTerm]);

  const paginatedItems = getPaginatedItems(
    filteredItems,
    currentPage,
    itemsPerPage
  );
  const totalPages = getTotalPages(filteredItems.length, itemsPerPage);

  return {
    items,
    filteredItems,
    paginatedItems,
    isLoading,
    error,
    searchTerm,
    currentPage,
    totalPages,
    setSearchTerm,
    setCurrentPage,
    loadItems,
  };
};
