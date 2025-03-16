import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductsCard/ProductCard'

function GoldBracelets() {
  const [goldData, setGoldData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

<<<<<<< HEAD
const goldData = [
  { img: goldimg1,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: goldimg2,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: goldimg3,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: goldimg4,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: goldimg5,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: goldimg2,hoverimg:goldimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]
=======
  useEffect(() => {
    fetch('http://localhost:8000/api/products/Gold/Bracelets')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then((data) => {
        console.log('API Response:', data)
        setGoldData(Array.isArray(data) ? data : data.products || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Fetch error:', error)
        setError(error.message)
        setGoldData([])
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center text-lg">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>
>>>>>>> d8edd46c1823e2433236922300b15d4842488896

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Gold Bracelets ({goldData.length})
      </h1>
<<<<<<< HEAD
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {goldData.map((info, index) => (
          <ProductCard
            key={index}
            titleimg={info.img}
            hoverimg={info.hoverimg}
            title={info.title}
            price={info.price}
          />
        ))}
      </div>
=======
      {goldData.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goldData.map((info, index) => (
            <ProductCard
              key={index}
              titleimg={info.imageFile1 || 'default-image.jpg'}
              hoverimg={info.imageFile2 || 'default-hover.jpg'}
              title={info.name}
              price={info.price}
            />
          ))}
        </div>
      )}
>>>>>>> d8edd46c1823e2433236922300b15d4842488896
    </>
  )
}

export default GoldBracelets
