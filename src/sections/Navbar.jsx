import { useState } from "react";
import { motion } from "motion/react";
import { useActiveSection, sections } from "../hook/useActiveSection";

function Navigation({ onNavigate, active }) {
    return <ul className="nav-ul">
        {sections.map(({ id, label }) => (
            <li className="nav-li" key={id}>
                <a
                    className={`nav-link font-bold${active === id ? " is-active" : ""}`}
                    href={`#${id}`}
                    onClick={onNavigate}
                >
                    {label}
                </a>
            </li>
        ))}
    </ul>
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const active = useActiveSection();

    return <div className="fixed inset-x-0 z-40 w-full backdrop-blur-lg border-b border-cream/10" style={{backgroundColor: "var(--color-maroon)"}}>
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-3 sm:py-3.5">
                <a
                href="/"
                className="group flex items-center gap-2.5 font-display text-lg sm:text-xl font-semibold tracking-tight text-cream transition-colors hover:text-sand"
                >
                    <span className="w-2 h-2 rounded-full bg-sand shrink-0" />
                    Selim Coskunuzer
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer opacity-90 hover:opacity-100 transition-opacity focus:outline-none sm:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <img
                    src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                    className="w-6 h-6"
                    alt="toggle"
                    />
                </button>
                <nav className="hidden sm:flex"><Navigation active={active} /></nav>
            </div>
        </div>
        {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden border-t border-cream/10" initial={{ opacity: 0, x:-10}} animate={{ opacity: 1, x:0}} style={{ maxHeight: "100vh"}} transition={{ duration: 1}}>
            <nav className="pb-5">
                <Navigation onNavigate={() => setIsOpen(false)} active={active} />
            </nav>
        </motion.div>)}
    </div>
}

export default Navbar;
