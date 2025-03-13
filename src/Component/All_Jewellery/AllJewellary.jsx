import React, { useState } from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import jewelleryimg1 from '../../assets/jewelleryimg1.jpg'
import jewelleryimg2 from '../../assets/jewelleryimg2.jpg'
import jewelleryimg3 from '../../assets/jewelleryimg3.jpg'
import jewelleryimg4 from '../../assets/jewelleryimg4.jpg'
import jewelleryimg5 from '../../assets/jewelleryimg5.jpg'
import FilterSidebar from '../Filter/FilterSidebar'
import FilterButton from '../Filter/FilterButton'


const jewelleryData = [
  { img: jewelleryimg1, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: jewelleryimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: jewelleryimg3, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: jewelleryimg4, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: jewelleryimg5, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: jewelleryimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function AllJewellary() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true)
  }
  const clickHandle=()=>{
    setIsOpen(false);
  }


  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
        All Jewelleryes (12345)
      </h1>
      <FilterButton handleClick={handleClick} />
      {isOpen && <FilterSidebar clickHandle={clickHandle}/>}
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {jewelleryData.map((info, index) => (
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

export default AllJewellary
