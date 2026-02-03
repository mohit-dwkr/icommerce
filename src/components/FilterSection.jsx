import React from "react";
import { getData } from "../Context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  return (
    <aside className="min-w-72 bg-white shadow-md rounded-2xl p-5 h-max border border-gray-200">
  
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-lg outline-blue-500"
      />

      
      <h2 className="mt-5 font-bold text-lg">Category</h2>
      <div className="mt-3 space-y-2">
        {categoryOnlyData?.slice(0, 10).map((item, index) => (
          <label key={index} className="flex gap-2 items-center">
            <input
            className="cursor-pointer"
              type="radio"
              name="category"
              value={item}
              checked={category === item}
              onChange={handleCategoryChange}
            />
            <span className="uppercase text-sm cursor-pointer">{item}</span>
          </label>
        ))}
      </div>

      
      <h2 className="mt-5 font-bold text-lg">Brands</h2>
      <select
        value={brand}
        onChange={handleBrandChange}
        className="w-full p-2 border rounded-lg mt-2"
      >
        {brandOnlyData?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      
      <h2 className="mt-5 font-bold text-lg">Price Range</h2>
      <label className="text-sm text-gray-600">
        ${priceRange[0]} - ${priceRange[1]}
      </label>
      <input
        type="range"
        min="0"
        max="20000"
        value={priceRange[1]}
        onChange={(e) =>
          setPriceRange([priceRange[0], Number(e.target.value)])
        }
        className="w-full cursor-pointer"
      />

      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setPriceRange([0, 20000]);
        }}
        className="w-full bg-blue-500 text-white rounded-lg py-2 mt-4 hover:bg-blue-600 cursor-pointer"
      >
        Reset Filter
      </button>
    </aside>
  );
};

export default FilterSection;
