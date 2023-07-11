/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section1 = () => {
    return (
        <div className="bg-secondary">
            <div className='md:py-20 py-10 container'>
                <div className='md:w-[750px] m-auto text-center space-y-3'>
                    <div className="text-4xl font-bold">Mediumworks makes large language model easy</div>
                    <div className="text-lg">
                        We provide a comprehensive services in customizing, deploying, and maintaining large language models, making advanced AI technology accessible and efficient for businesses of all sizes. Interested in working with us? <a href="/" className='underline'>Contact our sales team.</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-20 gap-14">
                    <div className='text-center bg-white p-5  rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Customize<br />
                            Large Language Model </div>
                        <img src="/assets/images/bookspack.png" alt='bookspack' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-white p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Deploy<br />
                            Large Language Model</div>
                        <img src="/assets/images/books.png" alt='books' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-white p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Maintain<br />
                            Large Language Model</div>
                        <img src="/assets/images/booksafe.png" alt='booksafe' className='m-auto mt-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1