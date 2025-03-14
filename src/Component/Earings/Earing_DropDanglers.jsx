import React from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import earringsimg1 from '../../assets/earringsimg1.jpg'
import earringsimg2 from '../../assets/earringsimg2.jpg'
import earringsimg3 from '../../assets/earringsimg3.jpg'
import earringsimg4 from '../../assets/earringsimg4.jpg'
import earringsimg5 from '../../assets/earringsimg5.jpg'
import earringsimg6 from '../../assets/earringsimg6.jpg'
import goldimg2 from '../../assets/goldimg2.jpg'



const earingsData = [
  { img: earringsimg1,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: earringsimg2,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: earringsimg3,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: earringsimg4,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: earringsimg5,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: earringsimg6,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function Earing_DropDanglers() {
  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
      DropDanglers (65748)
      </h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {earingsData.map((info, index) => (
          <ProductCard
            key={index}
            titleimg={info.img}
            hoverimg={info.hoverimg}
            title={info.title}
            price={info.price}
          />
        ))}
      </div>
    </>
  )
}

export default Earing_DropDanglers
