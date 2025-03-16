import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../ProductsCard/ProductCard'

function AllJewelry_FingerRing() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/products/all%20jewellery/finger rings'
        )

        console.log('API Response:', response.data) // Debugging

        if (Array.isArray(response.data)) {
          setProducts(response.data)
        } else if (Array.isArray(response.data.products)) {
          setProducts(response.data.products)
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
        Finger Rings ({products.length})
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No rings available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((info, index) => (
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

export default AllJewelry_FingerRing
