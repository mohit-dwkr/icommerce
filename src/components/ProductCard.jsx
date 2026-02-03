import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"; 

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
   const { addToCart } = useCart();
  return (
    <div className="bg-white p-3 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group">
      <img
        src={product.images?.[0] || product.thumbnail}
        alt={product.title}
        className="rounded-lg object-cover aspect-square w-full group-hover:scale-110 transition-transform" onClick={() => navigate(`/products/${product.id}`)} />
      <h1 className="font-semibold mt-2 text-sm line-clamp-1">{product.title}</h1>
      <p className="text-lg font-bold text-gray-800">${product.price}</p>
      <button onClick={()=>addToCart(product)} className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"  >
        <IoCartOutline size={20}  /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
