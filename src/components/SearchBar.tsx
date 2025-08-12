import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => (
  <div className="mb-6">
    <div className="max-w-md">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Search items
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        autoComplete="off"
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by title or content..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  </div>
);

export default SearchBar;
