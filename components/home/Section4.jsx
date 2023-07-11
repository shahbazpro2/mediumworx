/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section4 = () => {
    return (
        <div className="">
            <div className='md:py-32 py-10 container'>
                <div className='md:w-[750px] m-auto text-center space-y-3'>
                    <div className="text-4xl font-bold">Mediumworks makes artificial intelligence easy</div>
                    <div className="text-lg">
                        We provide a service to harness the combined power of search, large language model, and intelligent agent; we aim to enhance your daily operations. Our commitment extends beyond mere task automation; we strive to be precise and correct in execution of all tasks, underpinned by fact-based accuracy. Interested in working with us? <a href="/" className='underline'>Contact our sales team.</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-20 gap-14">
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Search </div>
                        <img src="/assets/images/painting.png" alt='painting' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto  h-[54px]">Large Language Model</div>
                        <img src="/assets/images/books.png" alt='books' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto  h-[54px]">Intelligent Agent</div>
                        <img src="/assets/images/rob1.png" alt='rob1' className='m-auto  mt-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4