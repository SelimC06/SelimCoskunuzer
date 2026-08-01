import { mySocials } from "../constants";

const iconStyle = (src) => ({
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
});

const Footer = () => {
    return (
        <section
            id="site-footer"
            className="font-mono flex flex-wrap items-center justify-between pb-3 text-xs uppercase tracking-wide text-maroon/80 c-space"
            style={{ paddingTop: "max(0px, calc(50vh - 390px))" }}
            // Scroll headroom so the Contact spine node can reach dead-center
            // on the photo: the page's natural end alone isn't tall enough to
            // scroll that far at typical viewport heights. Sits above the
            // footer's own content, not after it, so the footer stays as
            // close to the true bottom of the page as this allows.
        >
            <div className="mb-3 flex items-center gap-3 w-full">
                <span className="text-maroon/60 shrink-0">4 Nodes Linked</span>
                <div className="bg-linear-to-r from-maroon/60 via-maroon/60 to-transparent h-px flex-1"/>
            </div>
            <div className="flex gap-2">
                <a href="/terms.html" className="hover:text-ember transition-colors">Terms &amp; Conditions</a>
                <p>|</p>
                <a href="/privacy.html" className="hover:text-ember transition-colors">Privacy Policy</a>
            </div>
            <div className="flex gap-4">
                {mySocials.map((social, index)=>(
                    <a href={social.href} key={index} aria-label={social.name} className="text-maroon/70 hover:text-ember transition-colors">
                        <span
                            style={iconStyle(social.icon)}
                            className="block w-5 h-5 bg-current"
                        />
                    </a>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} Selim. All rights reserved</p>
        </section>
    )
}

export default Footer;
