import { mySocials } from "../constants";
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between pb-3 text-sm text-[rgba(111,26,7,0.9)] c-space">
            <div className="mb-4 bg-gradient-to-r from-transparent via-[rgba(111,26,7,0.9)] to-transparent h-[1px] w-full"/>
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3 ">
                {mySocials.map((social, index)=>(
                    <a href={social.href} key={index}>
                        <img src={social.icon} className="w-5 h-5 invert sepia saturate-[400%] hue-rotate-[345deg]" alt={social.name}/>
                    </a>
                ))}
            </div>
            <p>@ 2026 Selim. All rights reserved</p>
        </section>
    )
}

export default Footer;