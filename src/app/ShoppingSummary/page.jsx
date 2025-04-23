"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ShoppingSummary = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-white font-poppins p-6 flex flex-col items-center">
      <div className="mb-12 mt-8">
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-green-500">
          <i className="fas fa-check text-5xl text-white"></i>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Thank You for Shopping through our Trolley!</h1>

      <div className="w-full max-w-lg bg-gray-100 rounded-lg p-6 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction Status</span>
            <span className="text-green-500 font-semibold">Success</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time</span>
            <span className="font-semibold">{new Date().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => router.push("/")}
        className="w-full max-w-lg bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        <i className="fas fa-home mr-2"></i>
        Go to Home
      </button>
    </div>
  );
};

export default ShoppingSummary;
