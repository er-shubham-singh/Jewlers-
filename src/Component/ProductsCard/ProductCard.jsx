import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const ProductCard = ({ titleimg, hoverimg, title, price }) => {
  return (
    <div className="p-2 max-w-[450px] mx-auto">
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden group">
        {/* Default Image */}
        <img
          src={titleimg}
          alt="Product Image"
          className="rounded-xl w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* Hover Image (appears on hover) */}
        <img
          src={hoverimg}
          alt="Hover Image"
          className="absolute top-0 left-0 rounded-xl w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2">
          <FaRegHeart className="size-6 cursor-pointer" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-2">
        <h3 className="text-lg text-black font-bold">{title}</h3>
        <p className="text-xl font-bold text-[#996515]">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
