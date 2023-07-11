/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Home = () => {
    return (
        <div className='md:py-20 py-10 container'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-20">
                <div className='flex justify-center items-center h-full'>
                    <img src="/assets/images/homebg.png" alt="homebg" className='w-full 2xl:w-[80%]' />
                </div>
                <div className='space-y-5'>
                    <div className="text-3xl md:text-5xl font-bold tracking-wider md:leading-[60px]">
                        Revolutionize Artificial
                        Intelligence with
                        LLM, Search, and Agent
                    </div>
                    <div className="text-2xl font-medium text-primary">Consultancy and Development</div>
                </div>

            </div>
        </div>
    )
}

export default Home