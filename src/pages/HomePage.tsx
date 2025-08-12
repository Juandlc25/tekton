import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useItems } from "../hooks/useItems";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";

const HomePage: React.FC = () => {
  const { logout } = useAuthentication();
  const navigate = useNavigate();
  const {
    paginatedItems,
    filteredItems,
    isLoading,
    error,
    searchTerm,
    currentPage,
    totalPages,
    setSearchTerm,
    setCurrentPage,
    loadItems,
  } = useItems();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleClearSearch = () => setSearchTerm("");

  if (isLoading) {
    return <LoadingSpinner message="Loading items..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadItems} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Items List</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Statistics */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {paginatedItems.length} of {filteredItems.length} items
            {searchTerm && ` (filtered by "${searchTerm}")`}
          </p>
        </div>

        {/* Items list or empty state */}
        {paginatedItems.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            searchTerm={searchTerm}
            onClearSearch={handleClearSearch}
          />
        )}

        {/* Pagination */}
        {totalPages > 1 && paginatedItems.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
};

export default HomePage;
