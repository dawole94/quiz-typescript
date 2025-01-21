import React from 'react'

const WelcomeWindow = () => {
  return (
    <div className="w-96 h-96 bg-gray-400 flex flex-col absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] justify-center items-center gap-10 rounded-full">
      <h1 className="font-bold text-green-800">Welcome to the general knowledge quiz.</h1>
      <button className='font-bold bg-blue-300 px-6 py-4 rounded-full'>Start the quiz</button>
    </div>
  )
}

export default WelcomeWindow