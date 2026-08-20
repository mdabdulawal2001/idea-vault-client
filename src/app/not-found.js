import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">
        আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।
      </p>
    </div>
  );
}
