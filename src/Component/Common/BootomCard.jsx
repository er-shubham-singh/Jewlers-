import React from "react";
import { useState } from "react";




const product = {
  id: 1,
  name: "Gold Ring",
  price: 49593,
  weight: "5.255g",
};

function BootomCard() {

  const [cart, setCart] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
   

  const [chosePopup, setChosePopup] = useState(false);


  const addToCart = () => {
    setCart([...cart, product]);
    alert("Product added to cart!");
    setShowPopup(true);
  };

  return (
    <div>
      <div className="  bottom-3 lg:right-[25%] l  z-10  fixed  bg-white lg:w-1/2 mx-auto  rounded-2xl shadow-2xl ">
        <div className="flex   justify-evenly py-1 items-center   ">
          <div className="lg:block hidden ">
            <p className="text-md px-5 py-3 w-full ">₹49 593 {product.price}</p>
          </div>
          <div className="w-3/6 px-3 lg:block hidden  ">
            <select
              name=""
              id=""
              className=" w-[100%] cursor-pointer border-none text-lg px-3 py-3 rounded-2xl"  onClick={() => setChosePopup(!chosePopup)}
            >
              <option value=" " className="">
                Weight:5.255g {product.weight}
              </option>
            </select>
          </div>
          <div className="">
            <button
              className=" cursor-pointer text-md bg-amber-700 px-5 py-3 rounded-4xl lg:w-full w-screen "
              onClick={addToCart}
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>


      {chosePopup && (
        
        <div className="fixed inset-0 z-10 justify-center   items-center flex  bg-opacity-500 backdrop-blur-md ">
          <div className="bg-white p-6 rounded-lg shadow-xl md:w-[30%] w-[85%]  ">
            <div className="flex justify-between">
            <h1 className="text-lg font-bold mb-2" >Choose your Preference</h1>
            <p onClick={() => setChosePopup(false)} className="cursor-pointer">close</p>
            </div>
            <div>
              <p>Gross Weight</p>

              <button></button>
            </div>
            <div>
              <p>quntitey</p>
              <div>
              <button></button>
              <p></p>
              <button></button>

              </div>
              
            </div>
            
            <button className=" bottom-0  cursor-pointer text-md bg-amber-700 px-5 py-3 rounded-4xl  w-[100%] ">Apply</button>
          </div>
          

        </div>

      )}

       
      {showPopup && (
        <div className="fixed inset-0 z-10   items-center flex justify-center  bg-opacity-500 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-xl md:w-[30%] w-[85%]  ">
            <h2 className="text-lg font-bold mb-2">Product Added! </h2>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
            <p className="text-md mt-2 font-semibold">{product.name}</p>
            <p className="text-gray-600">Weight: {product.weight}</p>
            <p className="text-green-600 font-bold">₹{product.price}</p>
            <div className="flex justify-between mt-4">
              <button
                className=" text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BootomCard;