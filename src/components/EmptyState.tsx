import React from "react";

interface EmptyStateProps {
  searchTerm: string;
  onClearSearch: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  searchTerm,
  onClearSearch,
}) => (
  <div className="text-center py-12">
    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <svg
        className="w-12 h-12 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
    <p className="text-gray-500 mb-4">
      {searchTerm
        ? `No items match your search for "${searchTerm}"`
        : "No items available"}
    </p>
    {searchTerm && (
      <button
        onClick={onClearSearch}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Clear search
      </button>
    )}
  </div>
);

export default EmptyState;
