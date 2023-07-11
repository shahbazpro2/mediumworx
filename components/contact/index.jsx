/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_b93xyhh', 'template_vsj9e62', form.current, '2KXW4qSYYG1gEAlTz')
            .then((result) => {
                alert("We will get back to you soon!");
                form.current.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setLoading(false)
            })
    };
    return (
        <div className='py-20 container'>
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Talk to mediumworx</div>
            </div>
            <form onSubmit={onSubmit} ref={form}>
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
                            <input type="text" name="name" required className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Email address*</label>
                            <input type="text" name="email" required className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>Company*</label>
                            <input type="text" name="company" required className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <label className='block text-sm font-bold'>How can we help?</label>
                            <textarea rows={4} type="text" name="message" required className='w-full mt-2 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-light' />
                        </div>
                        <div>
                            <button disabled={loading} className='btn'>
                                {
                                    loading ? 'Sending...' : 'Send Request'
                                }
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Contact