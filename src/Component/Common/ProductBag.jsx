import React from 'react'

const ProductBag=()=> {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-green-600 font-bold text-lg">🇮🇳</span>
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border p-2 rounded flex-1"
            />
            <button className=" px-4 py-2 rounded">Check</button>
          </div>
          <div className="border p-4 rounded-xl flex gap-4 items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="product"
              className="w-20 h-20 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold my-2">Radiant Crossover Diamond Bangle</h3>
              <p className="text-gray-500 text-sm my-2">Size: 47 * 57 MM | Weight: 8.443 g</p>
              <p className="font-bold text-lg">₹ 116179</p>
            </div>
            <div className='flex flex-col gap-7'>
              <button className='text-xl'>X</button>
              <button className="text-red-500">+ Add A Gift Message</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 border rounded-xl flex flex-col items-center text-center">
              <span>✅</span>
              <p className="font-semibold">Purity Guaranteed</p>
              <p className="text-xs text-gray-500">on every online purchase</p>
            </div>
            <div className="p-4 border rounded-xl flex flex-col items-center text-center">
              <span>🚚</span>
              <p className="font-semibold">Secure Delivery</p>
              <p className="text-xs text-gray-500">by our trusted partners</p>
            </div>
            <div className="p-4 border rounded-xl flex flex-col items-center text-center">
              <span>💳</span>
              <p className="font-semibold">Easy & Secure Payments</p>
              <p className="text-xs text-gray-500">backed by the trust of TATA</p>
            </div>
          </div>
          <p className="flex ga-2 font-semibold text-lg mt-8">
            <span>TOTAL (Incl. Taxes):</span> <span>₹ 116179</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="text-gray-500">Total Balance</p>
            <p className="text-xl font-bold">0</p>
            <p className="text-sm">Redeem Your Points / NeuCoins</p>
          </div>
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <input
            type="text"
            placeholder="Apply Coupon Code / Promo Code"
            className="border p-2 w-full rounded mb-4"
          />
          <div className="text-sm">
            <p className="flex justify-between"><span>Sub Total</span> <span>₹ 116179</span></p>
            <p className="flex justify-between text-green-500"><span>Discount</span> <span>- ₹ 0</span></p>
            <p className="flex justify-between text-blue-500"><span>Delivery Charge</span> <span>FREE</span></p>
          </div>
          <div className="border-t my-4"></div>
          <p className="flex justify-between font-semibold text-lg">
            <span>TOTAL (Incl. Taxes)</span> <span>₹ 116179</span>
          </p>
          <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-xl font-semibold cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductBag