import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from "../assets/Loader.gif"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
    const [searchData, setSearchData] = useState([])
    const params = useParams()
    const category = params.category
    const navigate = useNavigate()

    const getFilterData = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
            const data = res.data.products
            setSearchData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFilterData()
        window.scrollTo(0, 0)
    }, [category])

    return (
        <div className="w-full">
            {
                searchData.length > 0 ? (
                    <div className="max-w-6xl mx-auto mt-6 sm:mt-10 mb-10 px-3 sm:px-4">

                    
                        <button
                            onClick={() => navigate('/')}
                            className="bg-gray-800 mb-4 sm:mb-5 text-white px-3 py-2 rounded-md 
                            cursor-pointer flex items-center gap-1 text-sm sm:text-base"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            Back
                        </button>

                        
                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
            
                            {searchData.map((product, index) => (
                                <ProductListView key={index} product={product} />
                            ))}
                        </div>

                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
                        <img src={Loader} alt="loading..." className="w-20 h-20 sm:w-28 sm:h-28" />
                    </div>
                )
            }
        </div>
    )
}

export default CategoryProduct