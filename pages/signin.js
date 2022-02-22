import React from 'react'

// {`bg-url[/${signin.jpg}] h-screen w-screen`}

const Signin = () => {

  // const url = "url(" + signin.jpg + ")";

  // `url(${signin.jpg})`

  // style={{background: 'url(signin.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover"}}

  // bg-gradient-to-r from-cyan-500 to-blue-500

  return (
    <>
      <div className="bg-siginbg h-screen w-screen relative">
        <div className='flex justify-between items-center mx-8'>
          <img src="Netflix-Logo.wine.svg" className='w-44' alt='Netlix Logo'/>
          <div>
            {/* <select className='mr-4'>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select> */}
            <button className='py-1 px-4 bg-red-600 rounded-sm text-lg cursor-pointer'>Sign In</button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center h-screen w-screen absolute top-0'>
          <div className='w-1/2 text-center'>
            <h1 className='text-6xl font-bold mb-2'>Unlimited movies, TV shows and more.</h1>
            <h4 className='text-3xl'>Watch anywhere. Cancel anytime.</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin