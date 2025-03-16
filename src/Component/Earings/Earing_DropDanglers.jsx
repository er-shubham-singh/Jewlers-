import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductsCard/ProductCard'
import earringsimg1 from '../../assets/earringsimg1.jpg'
import earringsimg2 from '../../assets/earringsimg2.jpg'
import earringsimg3 from '../../assets/earringsimg3.jpg'
import earringsimg4 from '../../assets/earringsimg4.jpg'
import earringsimg5 from '../../assets/earringsimg5.jpg'
import earringsimg6 from '../../assets/earringsimg6.jpg'


const earingsData = [
  { img: earringsimg1, title: "Dazzling Grace Drop Earrings", price: "₹ 50784" },
  { img: earringsimg2, title: "Dazzling Grace Drop Earrings", price: "₹ 40564" },
  { img: earringsimg3, title: "Dazzling Grace Drop Earrings", price: "₹ 45677" },
  { img: earringsimg4, title: "Dazzling Grace Drop Earrings", price: "₹ 12345" },
  { img: earringsimg5, title: "Dazzling Grace Drop Earrings", price: "₹ 98765" },
  { img: earringsimg6, title: "Dazzling Grace Drop Earrings", price: "₹ 67548" }
]

function Earing_DropDanglers() {
  const [earringsData, setEarringsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/api/products/Earrings/Drop%20&%20Danglers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then((data) => {
        console.log('API Response:', data)
        setEarringsData(Array.isArray(data) ? data : data.products || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Fetch error:', error)
        setError(error.message)
        setEarringsData([])
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center text-lg">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <h1 className="text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center">
        Drop Danglers ({earringsData.length})
      </h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
        {earingsData.map((info, index) => (
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

export default Earing_DropDanglers
