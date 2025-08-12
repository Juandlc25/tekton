import React from "react";

interface LoadingSpinnerProps {
  message?: string;
  variant?: "fullscreen" | "inline" | "button";
  size?: "sm" | "md" | "lg";
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  variant = "fullscreen",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const spinner = (
    <div className="text-center">
      <div
        className={`animate-spin rounded-full border-b-2 border-indigo-600 mx-auto ${sizeClasses[size]}`}
      ></div>
      {message && variant !== "button" && (
        <p className="mt-4 text-gray-600">{message}</p>
      )}
    </div>
  );

  if (variant === "fullscreen") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  if (variant === "button") {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`animate-spin rounded-full border-b-2 border-white ${sizeClasses.sm}`}
        ></div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
