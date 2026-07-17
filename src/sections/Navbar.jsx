import { useEffect, useState } from "react";
import { motion } from "motion/react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "Experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

function useActiveSection() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return active;
}

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

    return <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg border-b border-cream/10" style={{backgroundColor: "var(--color-maroon)"}}>
        <div className="mx-auto c-space max-w-7xl">
            <div className="flex items-center justify-between py-3 sm:py-4">
                <a
                href="/"
                className="font-display text-xl font-semibold tracking-tight transition-colors text-cream hover:text-sand"
                >
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
