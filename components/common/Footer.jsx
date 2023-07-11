/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary text-white'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 py-14">
                    <div>
                        <div className="flex gap-2 items-center">
                            <img src="/assets/images/logo-white.png" alt="logo" className='lg:w-[50px]' />
                            <div className="text-2xl font-bold">
                                mediumworx
                            </div>
                        </div>
                        <div className="text-sm my-3 text-gray-300">
                            @{new Date().getFullYear()} Mediumworx LLC. All rights reserved.<br />
                            mediumwork is a registered trademark of Mediumworx LLC
                        </div>
                        <div>
                            <Link href="/privacy" className='underline'>Privacy</Link>, <Link href="/terms" className='underline'>Terms</Link> ,and <Link href="/cookie" className='underline'>Cookie Policy</Link>
                        </div>

                    </div>
                    <div className="flex flex-col md:items-end justify-start py-7">
                        <ul className='flex flex-row items-center gap-7'>
                            <Link href="/customers">
                                <li className='text-lg'>Customers</li>
                            </Link>
                            <Link href="/company">
                                <li className='text-lg'>Company</li>
                            </Link>
                            <Link href="/contact">
                                <li className='text-lg'>Contact</li>
                            </Link>

                        </ul>

                    </div>
                    <div className="md:col-span-2 mt-7">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 text-xs lg:w-[50%]">
                            <div>
                                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                    <div className='flex gap-2 items-center'>

                                        <img src="/assets/icons/twitter.png" alt="twitter" className='w-[30px]' />

                                        <span>Twitter</span>

                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                                    <div className='flex gap-2 items-center'>
                                        <img src="/assets/icons/github.png" alt="github" className='w-[30px]' />
                                        <span>Github</span>

                                    </div>
                                </a>

                            </div>
                            <div>
                                <a href="https://www.medium.com/" target="_blank" rel="noreferrer">
                                    <div className='flex gap-2 items-center'>
                                        <img src="/assets/icons/medium.png" alt="medium" className='w-[30px]' />
                                        <span>Medium</span>

                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    <div className='flex gap-2 items-center'>
                                        <img src="/assets/icons/youtube.png" alt="youtube" className='w-[30px]' />
                                        <span>Youtube</span>

                                    </div>
                                </a>

                            </div>
                            <div className='col-span-2'>
                                <a href="https://www.huggingface.co/" target="_blank" rel="noreferrer">
                                    <div className='flex gap-2 items-center'>
                                        <img src="/assets/icons/huggingface.svg" alt="huggingface" className='w-[30px]' />
                                        <span>Hugging Face</span>

                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer