import React from 'react'
import Button from './Button.jsx'

export default function Hero() {
  return (
    <div className='p-4 min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto'>
      <div className='flex flex-col gap-4'>
        <p>WELCOME TO </p>
        <h1 className='uppercase font-semibold text-5xl sm:text-5xl md:text-6xl lg:text7xl'>Lift<span className='text-blue-400 font-medium'>Logic</span></h1>
      </div>
        <p className='text-sm md:text-base font-light'>The ultimate platform to <span className='text-blue-400 font-medium'>optimize</span> your workouts, <span className='text-blue-400 font-medium'>track</span> your progress, and <span className='text-blue-400 font-medium'>achieve</span> your fitness goals with precision.</p>
        <Button func={()=>{window.location.href = '#generate'}} text={'🚀 Get Started Now !'}/>
    </div>
  )
}
 