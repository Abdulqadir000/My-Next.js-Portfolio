"use client"
import React,{ useState } from "react";
import { userInfo, headerItems } from "@/constants/constant";
import { navItems} from "@/modals/Header";
import { LuMenu } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";


const Header: React.FC = () => {
    const [navItems, showNavItems] = useState<boolean>(false);
    return (
        <header className="bg-white text-black p-5 justify-between w-full z-0 top-0 md:flex shadow-lg text-lg" >
            <div className="flex justify-between">
                <h2 className="text-2x1 font-bold pacifico-regular">{userInfo.name}</h2>
                <LuMenu className='md:hidden'
                    onClick={() => showNavItems(prevState => !prevState)}
                />
            </div>

            <div className={navItems ? "block" : "hidden md:block"}>
                <div className="mt-2 md:mt-0 mr-9">
                    {
                        Object.keys(headerItems).map(item => (  
                            <ScrollLink
                                to={headerItems[item as keyof navItems].page}
                                key={headerItems[item as keyof navItems].label}
                                className='block md:inline-block mr-6 md:space-x-7 cursor-pointer font-semibold md:hover:pointer-events-auto'
                                spy={true}
                                smooth={true}
                            >{headerItems[item as keyof navItems].label}

                            </ScrollLink>

                        ))
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;
