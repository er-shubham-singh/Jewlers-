import React from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import diamondimg1 from '../../assets/diamondimg1.jpg'
import diamondimg2 from '../../assets/diamondimg2.jpg'
import diamondimg3 from '../../assets/diamondimg3.jpg'
import diamondimg4 from '../../assets/diamondimg4.jpg'
import diamondimg5 from '../../assets/diamondimg5.jpg'
import diamondimg6 from '../../assets/diamondimg6.jpg'


const diamondData = [
  { img: diamondimg1, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: diamondimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: diamondimg3, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: diamondimg4, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: diamondimg5, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: diamondimg6, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function Diamond_Rings() {
  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
        Diamonds Rings (65748)
      </h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {diamondData.map((info, index) => (
          <ProductCard
            key={index}
            titleimg={info.img}
            title={info.title}
            price={info.price}
          />
        ))}
      </div>
    </>
  )
}

export default Diamond_Rings
