import React from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import goldimg1 from '../../assets/goldimg1.jpg'
import goldimg2 from '../../assets/goldimg2.jpg'
import goldimg3 from '../../assets/goldimg3.jpg'
import goldimg4 from '../../assets/goldimg4.jpg'
import goldimg5 from '../../assets/goldimg5.jpg'


const goldData = [
  { img: goldimg1, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: goldimg3, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: goldimg4, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: goldimg5, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function Gold_Pendants() {
  return (
    <>
    <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
    Gold Pendants (65748)
    </h1>
    <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
      {goldData.map((info, index) => (
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

export default Gold_Pendants
