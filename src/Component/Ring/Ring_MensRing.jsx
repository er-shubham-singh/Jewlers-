import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductsCard/ProductCard'

function Ring_MensRing() {
  const [ringData, setRingData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/products/Rings/Men's%20Rings")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then((data) => {
        console.log('API Response:', data)
        setRingData(Array.isArray(data) ? data : data.products || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Fetch error:', error)
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center text-lg">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Men's Rings ({ringData.length})
      </h1>
      {ringData.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ringData.map((info, index) => (
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
    </>
  )
}

export default Ring_MensRing
