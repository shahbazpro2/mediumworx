/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Section3 = () => {
    return (
        <div className="bg-secondary">
            <div className='md:py-20 py-10 container'>
                <div className='md:w-[750px] m-auto text-center space-y-3'>
                    <div className="text-4xl font-bold">Mediumworks makes intelligent agent easy</div>
                    <div className="text-lg">
                        We streamline the process of agent development and deployment, making it simple to create and manage intelligent virtual assistants tailored to your unique business needs. Interested in working with us? <Link href="/contact" className='underline'>Contact our sales team.</Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-14">
                    <div className='text-center bg-white p-5  rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Develop Intelligent Agent</div>
                        <img src="/assets/images/rob1.png" alt='rob1' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-white p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Deploy Intelligent Agent</div>
                        <img src="/assets/images/rob2.png" alt='rob2' className='m-auto mt-4' />
                    </div>
                    <div className='text-center bg-white p-5 rounded'>
                        <div className="text-lg font-bold m-auto h-[54px]">Maintain
                            <br />
                            Intelligent Agent</div>
                        <img src="/assets/images/rob3.png" alt='rob3' className='m-auto mt-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3