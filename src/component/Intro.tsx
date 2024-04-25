'use client'
import { headerItems, userInfo } from "@/constants/constant"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter";
import { MouseEventHandler } from 'react'; 

const openLinkedInProfile: MouseEventHandler<HTMLButtonElement> = () => {
  window.open('https://www.linkedin.com/in/abdul-qadir-khan-781266205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
};

const Intro: React.FC = () => {
    return (
        <section id={headerItems.home.page}
            className="h-screen flex text-center justify-center item-center md:flex-row flex-col md:text-start"
        >
            <div className="flex items-center justify-center">
                <Image
                    src={userInfo.picture}
                    alt="dp"
                    width={300}
                    height={300}
                    className="rounded-full mt-36 shadow-2xl"
                />
            </div>

            <div className="md:ml-19 sm:ml-12 md:w-1/2">
                <h1 className="uppercase text-7xl hidden md:block mt-56">Website Developer</h1>
                <h1 className="mt-8 md:text-3xl text-3xl">Hi, I&#39;m <span className="text-blue-700 text-3x1 md:text-4x1">{userInfo.name}</span></h1>
                <p className="mt-5 font-medium text-lg">A{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        <Typewriter
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={['Frontend developer', 'Youtuber', 'Programmer', 'Graphic designer']}
                        />
                    </span>
                </p>
                <button className="bg-blue-600 mt-5 w-28 h-9 rounded text-neutral-200 example_e" onClick={openLinkedInProfile}>
                    Hire Me
                </button>
                
            </div>
        </section>
    )
}

export default Intro;
