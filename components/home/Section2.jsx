/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section2 = () => {
    return (
        <div className="">
            <div className='md:py-32 py-10 container'>
                <div className='md:w-[750px] m-auto text-center space-y-3'>
                    <div className="text-4xl font-bold">Mediumworks makes search easy</div>
                    <div className="text-lg">
                        We provide an end-to-end solution for your search needs, from creating efficient data pipelines and indexing data using dense, sparse, and knowledge graph techniques, to delivering precise search results with powerful filtering options, making data discovery seamless and straightforward. Interested in working with us? <a href="/" className='underline'>Contact our sales team.</a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-20 gap-14">
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Create Data Pipeline </div>
                        <img src="/assets/images/pipes.png" alt='pipes' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto  h-[54px]">Index data using Dense, Sparse, and Knowledge Graph</div>
                        <img src="/assets/images/calc.png" alt='calc' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-secondary p-5 rounded'>
                        <div className="text-lg font-bold m-auto  h-[54px]">Search and Filter Results</div>
                        <img src="/assets/images/painting.png" alt='painting' className='m-auto  mt-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2