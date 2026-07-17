import { useEffect, useState } from "react";

// `centerTargetId` is what each section's spine node scrolls to (instead of
// jumping to the section's top edge). Home keeps plain top-of-page anchor
// behavior. About and Contact each center their own photo; Experience lands
// at whatever spot that leaves About's heading at, via scrollSpineNode.
export const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About", centerTargetId: "about-photo" },
    { id: "Experience", label: "Experience", centerTargetId: "experience-heading-block" },
    { id: "contact", label: "Contact", centerTargetId: "contact-photo" },
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
