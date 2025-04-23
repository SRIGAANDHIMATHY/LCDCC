"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const router = useRouter();

  const handlePayment = () => {
    router.push("/ShoppingSummary");
  };

  return (
    <div className="min-h-screen w-full bg-white font-poppins p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Payment Details</h1>

        {/* Payment Summary Box */}
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <div className="flex justify-between">
            <span className="text-lg">Total Amount</span>
            <span className="text-3xl font-bold">$100.00</span>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4 mb-6">
          {["Card", "UPI", "Wallet"].map((method) => (
            <div
              key={method}
              className="p-4 rounded-lg border-2 border-gray-200 flex items-center gap-4"
            >
              <i className={`fas fa-${method === "Card" ? "credit-card" : method === "UPI" ? "mobile-alt" : "wallet"} text-2xl text-blue-500`}></i>
              <div>
                <h3 className="font-semibold">{method} Payment</h3>
                <p className="text-sm text-gray-500">Pay using {method.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Confirm Payment Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
