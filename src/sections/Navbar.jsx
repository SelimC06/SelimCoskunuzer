import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
    return <ul className="nav-ul">
        <li className="nav-li">
            <a className='nav-link text-[rgba(247,243,227,1)] font-bold' href="#home">Home</a>
        </li>
        <li className="nav-li">
            <a className='nav-link text-[rgba(247,243,227,1)] font-bold' href="#about">About</a>
        </li>
        <li className="nav-li">
            <a className='nav-link text-[rgba(247,243,227,1)] font-bold' href="#Experience">Experience</a>
        </li>
        <li className="nav-li">
            <a className='nav-link text-[rgba(247,243,227,1)] font-bold' href="#contact">Contact</a>
        </li>
    </ul>
}
const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    {/*rgba(45, 35, 46,0.8)*/}
    return <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg" style={{backgroundColor: "rgba(111,26,7,0.9)"}}>
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-2 sm:py-0">
                <a 
                href="/"
                className="text-xl font-bold transition-colors text-[rgba(224,221,207,1)] hover:text-white">
                    Selim
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer text-black hover:text-white focus:outline-none sm:hidden"
                >
                    <img
                    src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                    className="w-6 h-6"
                    alt="toggle"
                    />
                </button>
                <nav className="hidden sm:flex"><Navigation /></nav>
            </div>
        </div> 
        {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden" initial={{ opacity: 0, x:-10}} animate={{ opacity: 1, x:0}} style={{ maxHeight: "100vh"}} transition={{ duration: 1}}>
            <nav className="pb-5">
                <Navigation />
            </nav>
        </motion.div>)}
    </div>
}

export default Navbar;