import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../ProductsCard/ProductCard';
import FilterSidebar from '../Filter/FilterSidebar';
import FilterButton from '../Filter/FilterButton';

function AllJewellary() {
  const { categoryType } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Set category to "All Jewellery" by default
  const category = "All Jewellery";

  // Log values for debugging
  console.log("Current Path:", location.pathname);
  console.log("Category Type from useParams():", categoryType);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = categoryType
          ? `http://localhost:5000/api/products/${encodeURIComponent(category)}/${encodeURIComponent(categoryType)}`
          : `http://localhost:5000/api/products/${encodeURIComponent(category)}`;

        console.log("Fetching from:", url);

        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryType]);

  return (
    <>
      <h1 className='text-black lg:text-2xl font-bold p-2 lg:ml-8 my-3 md:text-left text-center'>
        {categoryType || "All Jewellery"} ({products.length})
      </h1>
      <FilterButton handleClick={() => setIsOpen(true)} />
      {isOpen && <FilterSidebar clickHandle={() => setIsOpen(false)} />}
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {products.map((info) => (
          <ProductCard
            key={info._id}
            titleimg={info.imageFile1}
            hoverimg={info.imageFile2}
            title={info.name}
            price={`₹ ${info.price}`}
          />
        ))}
      </div>
    </>
  );
}

export default AllJewellary;
