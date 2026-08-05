// Embeds the actual proof of a piece of work — a paper PDF, a live site, a
// repo link — instead of a screenshot or a paragraph describing it. Shared
// between the Experience timeline and the Research section so both draw
// from the same real artifacts rather than restating them.
const ArtifactViewer = ({ artifact }) => {
  if (!artifact) return null;

  if (artifact.type === "pdf") {
    return (
      <div className="border border-maroon/15 overflow-hidden" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", backgroundColor: "rgba(111,26,7,0.9)" }}>
        <div className="px-4 py-2 font-mono uppercase tracking-wide text-on-maroon/80" style={{ fontSize: "var(--text-label)" }}>
          {artifact.whatIsIt}
        </div>
        <iframe
          title={artifact.whatIsIt}
          src={`${artifact.src}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-[280px] lg:h-[300px] flex-1"
          loading="lazy"
        />
      </div>
    );
  }

  if (artifact.type === "website") {
    return (
      <div className="border border-maroon/15 overflow-hidden" style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", backgroundColor: "rgba(111,26,7,0.9)" }}>
        <div className="px-4 py-2 font-mono uppercase tracking-wide text-on-maroon/80" style={{ fontSize: "var(--text-label)" }}>
          {artifact.whatIsIt}
        </div>
        <iframe
          title={artifact.whatIsIt}
          src={artifact.src}
          className="w-full h-[280px] lg:h-[300px] flex-1"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
        />
      </div>
    );
  }

  // Some sites (most university/corporate pages) refuse to render inside an
  // iframe at all (X-Frame-Options/CSP frame-ancestors), so this variant
  // links out instead of embedding — optionally fronted by a representative
  // image since there's no live preview to show.
  if (artifact.type === "link") {
    return (
      <a
        href={artifact.src}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col border border-maroon/15 overflow-hidden h-[280px] lg:h-[300px]"
        style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}
      >
        <div
          className="px-4 py-2 font-mono uppercase tracking-wide text-on-maroon/80 transition-colors"
          style={{ fontSize: "var(--text-label)", backgroundColor: "rgba(111,26,7,0.9)" }}
        >
          {artifact.whatIsIt}
        </div>
        {artifact.image && (
          <img
            src={artifact.image}
            alt={artifact.whatIsIt}
            className="w-full flex-1 min-h-0 object-contain p-4 bg-paper"
          />
        )}
        <div
          className="flex items-center gap-2 font-display text-lg text-on-maroon group-hover:text-sand transition-colors px-6 py-4"
          style={{ backgroundColor: "rgba(111,26,7,0.9)" }}
        >
          Visit site
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </div>
      </a>
    );
  }

  return null;
};

export default ArtifactViewer;
