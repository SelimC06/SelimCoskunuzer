import { useEffect, useState } from "react";

// `centerTargetId` is the element each section's spine node scrolls to and
// vertically centers (instead of jumping to the section's top edge). Home is
// left with plain top-of-page anchor behavior. Every other target is a
// same-sized "label + heading" block so centering each one independently
// lands the heading at the same viewport position across sections.
export const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About", centerTargetId: "about-heading-block" },
    { id: "Experience", label: "Experience", centerTargetId: "experience-heading-block" },
    { id: "contact", label: "Contact", centerTargetId: "contact-heading-block" },
];

export function useActiveSection() {
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
