/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Contact = () => {
    return (
        <div className='py-20 container'>
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Talk to mediumworx</div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
                <div className="space-y-5">
                    <div className="flex gap-5 md:mt-28">
                        <div>
                            <div className="text-2xl font-bold">Contact our sales team</div>
                            <div className="mt-3 text-xl text-primary">We’re here to help you enhance your daily operations by leveraging the power of artificial intelligence.</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 md:w-[90%] shadow-lg rounded-lg md:p-10 p-5">
                    <div>
                        <label className='block text-sm font-bold'>Name*</label>
                        <input type="text" className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Email address*</label>
                        <input type="text" className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>Company*</label>
                        <input type="text" className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <label className='block text-sm font-bold'>How can we help?</label>
                        <textarea rows={4} type="text" className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                    </div>
                    <div>
                        <button className='btn'>Send Request</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact