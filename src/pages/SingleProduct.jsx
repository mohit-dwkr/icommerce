import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import loader from "../assets/Loader.gif"
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../Context/CartContext';

const SingleProduct = () => {
    const params = useParams()
    const [SingleProduct, setSingleProduct] = useState("")
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart()

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
            setSingleProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleProduct()
        window.scrollTo(0, 0)
    }, [params.id])

    const OriginalPrice = Math.round(
        SingleProduct.price + (SingleProduct.price * SingleProduct.discountPercentage / 100)
    )

    return (
        <>
            {
                SingleProduct ? (
                    <div className="px-4 pb-4 md:px-6 lg:px-0">
                        <Breadcrums title={SingleProduct.title} />

                        <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">

                            
                            <div className="w-full flex justify-center">
                                <img
                                    src={SingleProduct.images?.[0] || SingleProduct.thumbnail}
                                    alt={SingleProduct.title}
                                    className="rounded-2xl w-full max-w-md md:max-w-full object-cover shadow-sm"
                                />
                            </div>

                            
                            <div className="flex flex-col gap-4 sm:gap-6">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                    {SingleProduct.title}
                                </h1>

                                <div className="text-gray-700 text-sm sm:text-base">
                                    {SingleProduct.brand?.toUpperCase()} /
                                    {SingleProduct.category?.toUpperCase()}
                                </div>

                                <p className="text-xl sm:text-2xl font-bold text-black">
                                    ${SingleProduct.price}
                                    <span className="line-through text-gray-600 ml-2 text-lg">
                                        ${OriginalPrice}
                                    </span>
                                    <span className="bg-red-500 text-white px-3 py-1 ml-2 rounded-full text-sm">
                                        {SingleProduct.discountPercentage}% off
                                    </span>
                                </p>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {SingleProduct.description}
                                </p>

                                
                                <div className="flex items-center gap-4">
                                    <label className="text-sm font-medium text-gray-700">Quantity:</label>
                                    <input
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <button
                                        onClick={() => addToCart({ ...SingleProduct, quantity })}
                                        className="px-6 py-2 text-lg bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition"
                                    >
                                        <IoCartOutline className="w-6 h-6" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px] sm:h-screen">
                        <img src={loader} alt="loading..." className="w-20 h-20 sm:w-28 sm:h-28" />
                    </div>
                )
            }
        </>
    )
}

export default SingleProduct
