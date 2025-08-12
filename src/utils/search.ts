import type { ApiItem } from "../types";

export const filterItems = (
  items: ApiItem[],
  searchTerm: string
): ApiItem[] => {
  if (!searchTerm.trim()) {
    return items;
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerSearchTerm) ||
      item.body.toLowerCase().includes(lowerSearchTerm)
  );
};
