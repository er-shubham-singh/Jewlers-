import React from 'react'
import ringimg1 from '../../assets/ringimg1.jpg'
import ringimg2 from '../../assets/ringimg2.jpg'
import ringimg3 from '../../assets/ringimg3.jpg'
import ringimg4 from '../../assets/ringimg4.jpg'
import ringimg5 from '../../assets/ringim5.jpg'
import ringimg6 from '../../assets/ringimg6.jpg'
import ProductCard from '../ProductsCard/ProductCard'



const ringData = [
  { img: ringimg1, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: ringimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: ringimg3, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: ringimg4, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: ringimg5, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: ringimg6, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function Ring_CasualRing() {
  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
      CasualRing (65748)
      </h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {ringData.map((info, index) => (
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

export default Ring_CasualRing
