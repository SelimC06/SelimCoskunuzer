import { useActiveSection, sections } from "../hook/useActiveSection";

// A persistent left-edge rail of nodes and edges standing in for site nav —
// turns scrolling through the page into traversing a small graph, echoing
// the hero car's own cube-network construction. Desktop only: there isn't
// enough horizontal room to keep this from crowding content on mobile.
const NetworkSpine = () => {
    const active = useActiveSection();
    const activeIndex = sections.findIndex((s) => s.id === active);

    return (
        <div className="fixed left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
            {sections.map((s, i) => (
                <div key={s.id} className="flex flex-col items-center">
                    <a
                        href={`#${s.id}`}
                        aria-label={s.label}
                        className="group relative flex items-center justify-center w-4 h-4"
                    >
                        <span
                            className={`w-2.5 h-2.5 rounded-full border transition-colors duration-300 ${
                                i <= activeIndex
                                    ? "bg-ember border-ember"
                                    : "bg-transparent border-mist/25"
                            }`}
                        />
                        {i === activeIndex && (
                            <span className="absolute w-2.5 h-2.5 rounded-full bg-ember/50 animate-ping" />
                        )}
                        <span className="absolute left-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-mist-soft opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {s.label}
                        </span>
                    </a>
                    {i < sections.length - 1 && (
                        <div className="w-px h-12 bg-mist/15 relative overflow-hidden">
                            <div
                                className={`absolute inset-x-0 top-0 bg-ember transition-all duration-500 ${
                                    i < activeIndex ? "h-full" : "h-0"
                                }`}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NetworkSpine;
