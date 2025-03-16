
import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ titleimg, hoverimg, title, price }) => {
    return (
        <div className="p-2 max-w-[450px] mx-auto">
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden group">
                <img
                    src={titleimg}
                    alt="Product Image"
                    className="rounded-xl w-full h-full object-cover "
                />

                <img
                    src={hoverimg}
                    alt="Hover Image"
                    className="absolute top-0 left-0 rounded-xl w-full h-full object-cover transition-transform duration-500 translate-x-full group-hover:translate-x-0"
                />

                <button className="absolute top-2 right-2">
                    <FaRegHeart className='size-6 cursor-pointer'/>
                </button>
            </div>

            <div className="p-2">
                <h3 className="text-lg text-black font-bold">{title}</h3>
                <p className="text-xl font-bold text-[#996515]">{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
