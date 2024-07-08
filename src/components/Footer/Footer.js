import React from 'react'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='px-2 w-full py-10 max-w-[1200px] mx-auto'>
            <div className='flex md:flex-row flex-col gap-16 md:gap-0 sm:items-center justify-between'>
                <div className='flex items-center flex-col'>
                    <img src={Logo} alt='Logo' className='w-52 h-52' />
                    <h1 className='uppercase text-3xl font-bold text-[#1b3083f5]'>
                        Moon Meme Coin
                    </h1>
                </div>
                <div className='flex sm:flex-row flex-col gap-5 lg:gap-10 '>
                    <div>
                        <ul className='flex flex-col gap-2 font-medium'>
                            <a href="#about">                            <li className='cursor-pointer text-base'>ABOUT</li>
                            </a>
                            <a href="#about">
                                <li className='cursor-pointer text-base'>ROADMAP</li>

                            </a>
                            <a href="#tokenomics">
                                <li className="cursor-pointer text-base font-medium">TOKENOMICS</li>

                            </a>
                            <a href="#faq">
                                <li className='cursor-pointer text-base'>FAQ</li>
                            </a>                        </ul>
                    </div>
                    {/* <div>
                        <ul className='flex flex-col gap-2 font-medium'>
                            <li className='cursor-pointer text-base'>PRIVACY POLICY</li>
                            <li className='cursor-pointer text-base'>COOKIES</li>
                            <li className='cursor-pointer text-base'>TERMS & CONDITIONS</li>
                        </ul>
                    </div>
                    <div className='max-w-[200px] flex flex-col gap-2'>
                        <p className='text-base font-medium'>4th Floor Woofer Street Doge Trade Center Panama</p>
                        <a href='/' className='word text-base font-bold'>marketing@Moonmemecoin.io</a>
                    </div>
                </div> */}
                </div>
            </div>
            <p className='text-center text-xl mt-6'>2024 Moon Meme Coin. All Rights Reserved.</p>
        </div>
    )
}

export default Footer