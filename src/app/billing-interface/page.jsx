"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full bg-[#001F5F] p-6 relative">
        <img
          src="https://th.bing.com/th/id/OIP._qbLbcbYjhO_H29p_OsA8QHaE8?rs=1&pid=ImgDetMain"
          alt="Supermarket"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h1 className="text-white text-3xl font-bold relative z-10">Welcome</h1>
      </header>

      <div className="flex-1 flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/2 bg-[#0A1F58] rounded-lg p-6">
          <div className="flex flex-col gap-2 mb-4 text-white">
            <div className="flex justify-between items-center">
              <span>Bill No: 501</span>
              <span>Date: 23/8/24</span>
            </div>
            <div className="text-lg font-semibold">Company Name Pvt Ltd</div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-2">S.No</th>
                  <th className="text-left p-2">Product</th>
                  <th className="text-left p-2">Qty</th>
                  <th className="text-left p-2">Exp</th>
                  <th className="text-right p-2">Amt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dashed border-gray-200">
                  <td className="p-2">1</td>
                  <td className="p-2">Milk</td>
                  <td className="p-2">2</td>
                  <td className="p-2">2/3/25</td>
                  <td className="p-2 text-right">$30.00</td>
                </tr>
                <tr className="border-b border-dashed border-gray-200">
                  <td className="p-2">2</td>
                  <td className="p-2">Salt</td>
                  <td className="p-2">3</td>
                  <td className="p-2">3/9/26</td>
                  <td className="p-2 text-right">$50.00</td>
                </tr>
                <tr className="border-b border-dashed border-gray-200">
                  <td className="p-2">3</td>
                  <td className="p-2">Sugar</td>
                  <td className="p-2">1</td>
                  <td className="p-2">2/8/25</td>
                  <td className="p-2 text-right">$20.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td colSpan="2" className="p-2">Total</td>
                  <td className="p-2">5</td>
                  <td></td>
                  <td className="p-2 text-right">$100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="bg-[#FFD700] text-[#001F5F] text-xl font-bold p-4 rounded-lg text-center mb-6">
            Mega Sale is Live!!!
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://th.bing.com/th/id/OIP._qbLbcbYjhO_H29p_OsA8QHaE8?rs=1&pid=ImgDetMain"
                alt="Dairy Products"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#001F5F] text-white px-4 py-2 rounded-full">Save 45%</div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://cdn.shopify.com/s/files/1/0064/8439/4039/files/Household-Essentials.jpg?v=1566467543"
                alt="Home's Essentials"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#001F5F] text-white px-4 py-2 rounded-full">Save 45%</div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://www.tastingtable.com/img/gallery/tips-you-need-when-cooking-with-spices/l-intro-1670951341.jpg"
                alt="Spices"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#001F5F] text-white px-4 py-2 rounded-full">Save 45%</div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://th.bing.com/th/id/R.daaa0bfa56361584e64cef76856cd29f?rik=zxuiFmTMhAc%2fyQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-iCWLv2hDiXM%2fUM6yuDEIsQI%2fAAAAAAAAAHk%2fv2IFZwwqxUE%2fs1600%2fFruits%2band%2bVegetables%2b(1).jpg&ehk=XcnHCYznnRUt5bob%2bhjO3vEm1gPO0mVNLp6ioSjWHtk%3d&risl=&pid=ImgRaw&r=0"
                alt="Fruits and Vegetables"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#001F5F] text-white px-4 py-2 rounded-full">Save 45%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-center">
      <a href="/Payment" className="w-full bg-[#007BFF] text-white py-4 rounded-lg text-center font-semibold hover:bg-[#0056b3] transition">
                Proceed to Payment
              </a>
      </div>
    </div>
  );
}

export default MainComponent;
