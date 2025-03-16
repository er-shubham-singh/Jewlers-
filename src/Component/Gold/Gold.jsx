import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductsCard/ProductCard'

function Gold() {
  const [goldProducts, setGoldProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/products/Gold' // Corrected API endpoint
        )

        console.log('API Response:', response.data) // Debugging

        if (Array.isArray(response.data)) {
          setGoldProducts(response.data) // If the API returns an array
        } else if (Array.isArray(response.data.products)) {
          setGoldProducts(response.data.products) // If data is inside { products: [...] }
        } else {
          throw new Error('Invalid API response format')
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch products')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <p className="text-center text-lg">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Gold ({goldProducts.length})
      </h1>
      {goldProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goldProducts.map((info, index) => (
            <ProductCard
              key={index}
              titleimg={info.imageFile1 || 'default-image.jpg'}
              hoverimg={info.imageFile2 || 'default-hover.jpg'}
              title={info.name}
              price={`₹ ${info.price}`}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Gold
