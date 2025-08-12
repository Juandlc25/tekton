import React from "react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <p className="text-red-600">{message}</p>
      <button
        onClick={onRetry}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Retry
      </button>
    </div>
  </div>
);

export default ErrorState;
