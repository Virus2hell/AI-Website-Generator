import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center'>
        {/* Header and description  */}
        <h2 className='font-bold text-6xl'>What should we Design?</h2>
        <p className='mt-2 text-xl text-gray-500'>Generate, Edit and Explore design with AI, Export code as well</p>

        {/* input box */}
        <div className='w-full max-w-xl p-5 border mt-5 rounded-2xl'>
            <textarea placeholder='Describe your page design'
            className='w-full h-24 focus:outline-none focus:ring-0 resize-none'
            />
        </div>

        {/* suggestion */}
    </div>
  )
}

export default Hero