import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductsCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JewelleryCategory = () => {
  const { categoryType } = useParams(); // Get category type from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/products/${categoryType}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryType]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!products.length) return <h1>No products found in this category</h1>;

  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
        {categoryType.toUpperCase()} ({products.length})
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            titleimg={product.imageFile1}
            hoverimg={product.imageFile2}
            title={product.name}
            price={`₹ ${product.price}`}
          />
        ))}
      </div>
    </>
  );
};

export default JewelleryCategory;
