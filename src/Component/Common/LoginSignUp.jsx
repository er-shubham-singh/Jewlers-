// import React from 'react'

// function LoginSignUp() {
//   return (
//     <div>
//       login signup code here
//     </div>
//   )
// }

// export default LoginSignUp

import React from 'react'

function LoginSignUp() {
  return (
    <div className="flex items-center justify-center bg-[#FCEFE3] p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <div className="bg-[#FAE7D1] flex flex-col items-center justify-center p-8 rounded-xl w-full md:w-1/2 text-center">
          <div className="bg-[#C46A3A] text-white p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-[#7D4C3D]">Personalized</h2>
          <h1 className="text-2xl font-bold text-[#7D4C3D]">Curations</h1>
          <p className="text-[#7D4C3D] mt-2">
            Explore curations based on your interests
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-[#3D2C2A]">
            Welcome to LoginPage!
          </h2>
          <p className="text-sm text-[#6D5F5A]">
            Login/Signup to get exclusive privileges
          </p>

          <div className="mt-4 flex items-center border rounded-lg overflow-hidden bg-gray-100">
            <span className="p-3 bg-white border-r">
              🇮🇳
            </span>
            <input
              type="text"
              placeholder="Enter mobile number"
              className="p-3 flex-grow bg-transparent outline-none"
            />
          </div>

          <button className="mt-4 bg-[#A02020] text-white py-2 rounded-lg w-full font-bold">
            Request OTP
          </button>

          <p className="text-xs text-gray-500 mt-2 text-center">
            By continuing, I agree to{" "}
            <a href="#" className="text-red-500">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-red-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp