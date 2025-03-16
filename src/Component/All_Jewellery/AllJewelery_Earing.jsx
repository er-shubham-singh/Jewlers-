import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductsCard/ProductCard'

function AllJewelery_Earing() {
  const [earrings, setEarrings] = useState([])

  useEffect(() => {
    axios
      .get(
        'http://localhost:8000/api/products/category/All Jewellery/categoryType/Earings'
      )
      .then((response) => {
        if (response.data.status === 1) {
          setEarrings(response.data.products)
        } else {
          console.error('No products found')
        }
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Earrings ({earrings.length})
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {earrings.map((info, index) => (
          <ProductCard
            key={index}
            titleimg={info.imageFile1}
            hoverimg={info.imageFile2} // ✅ Ensure hover image is also used
            title={info.name}
            price={`₹ ${info.price}`}
          />
        ))}
      </div>
    </>
  )
}

export default AllJewelery_Earing
