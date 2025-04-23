"use client";
import React from "react";

function MainComponent() {
  const handleRegisterClick = () => {
    window.location.href = "/billing-interface";
  };

  const categories = [
    {
      name: "Dairy Products",
      image: "https://th.bing.com/th/id/OIP._qbLbcbYjhO_H29p_OsA8QHaE8?rs=1&pid=ImgDetMain",
      discount: 15,
      bgColor: "bg-[#0A1F44]",
    },
    {
      name: "Home's Essentials",
      image: "https://cdn.shopify.com/s/files/1/0064/8439/4039/files/Household-Essentials.jpg?v=1566467543",
      discount: 45,
      bgColor: "bg-[#5E3B76]",
    },
    {
      name: "Spices",
      image: "https://www.tastingtable.com/img/gallery/tips-you-need-when-cooking-with-spices/l-intro-1670951341.jpg",
      discount: 20,
      bgColor: "bg-[#0A1F44]",
    },
    {
      name: "Fruits and Vegetables",
      image: "https://th.bing.com/th/id/R.daaa0bfa56361584e64cef76856cd29f?rik=zxuiFmTMhAc%2fyQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-iCWLv2hDiXM%2fUM6yuDEIsQI%2fAAAAAAAAAHk%2fv2IFZwwqxUE%2fs1600%2fFruits%2band%2bVegetables%2b(1).jpg&ehk=XcnHCYznnRUt5bob%2bhjO3vEm1gPO0mVNLp6ioSjWHtk%3d&risl=&pid=ImgRaw&r=0",
      discount: 12,
      bgColor: "bg-[#388E3C]",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-80 bg-[#0A1F44] p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-shopping-cart text-[#FFD700] text-2xl"></i>
            <h1 className="text-white text-2xl font-bold">SUPER SAVE</h1>
          </div>
          <p className="text-white text-sm">Choose your best products</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#FFD700] text-xl font-bold">30% Offer</span>
          <span className="text-white text-lg">Best this Week</span>
          <button
            onClick={handleRegisterClick}
            className="bg-[#00C853] text-white px-6 py-3 rounded-lg hover:bg-[#00B84D] transition-all font-bold"
          >
            REGISTER
          </button>
        </div>
        <button className="bg-[#FFD700] text-black px-6 py-3 rounded-lg hover:bg-[#FFC700] transition-all font-bold">
          Mega Sale
        </button>

        <div className="mt-auto">
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src="https://wallpaperaccess.com/full/2792518.jpg"
              alt="Grocery items"
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-white text-center">
            Premium Quality and Affordable Price
          </p>
        </div>
      </aside>

      <main className="flex-1 bg-white">
        <header className="bg-[#0A1F44] p-6">
          <h2 className="text-white text-2xl font-bold">Today's Offer</h2>
        </header>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 ${category.bgColor} text-white px-4 py-2 rounded-full`}
                  >
                    Save {category.discount}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#0A1F44]">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;