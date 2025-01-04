import React from 'react'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} alt="" />
    </div>
)

const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10 '>
            <div className="relative bg-black rounded-lg py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        clipClass='contact-clip-path-1'
                        src='img/contact-1.webp'
                    />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        clipClass=' absolute md:scale-125 z-30'
                        src='img/swordman-partial.webp'
                    />
                    <ImageClipBox
                        clipClass='sword-man-clip-path md:scale-125'
                        src='img/swordman.webp'
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className='font-general text-[10px] uppercase'>Join us</p>
                    <p className='special-font mt-10 w-full z-20 font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Lets <b>buil</b>d the <br /> <b>n</b>ew era  <b>of</b> <br/> gaming  tog<b>e</b>ther</p>
                    <Button title='Contact us' containerClass='mt-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Contact