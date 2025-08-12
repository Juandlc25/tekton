import React from "react";
import type { ApiItem } from "../types";

interface ItemCardProps {
  item: ApiItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
      {item.title}
    </h3>
    <p className="text-gray-600 text-sm line-clamp-3">{item.body}</p>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-xs text-gray-500">ID: {item.id}</span>
      <span className="text-xs text-gray-500">User: {item.userId}</span>
    </div>
  </div>
);

export default ItemCard;
