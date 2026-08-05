// The site's signature moment: a small, real knowledge graph — not a stock
// illustration of one — built from Selim's actual affiliations and research
// areas. On load, a pulse originates at the root node and propagates outward
// edge by edge, lighting each node in turn: literally message-passing, the
// mechanism his own GNN research studies. Plays once; prefers-reduced-motion
// (handled globally in index.css) collapses it straight to the fully-lit
// end state instead of disabling it outright, so the graph itself is never
// hidden, only its reveal.
const NODES = {
  root: { x: 50, y: 195, label: "Selim", depth: 0 },
  microsoft: { x: 195, y: 70, label: "Microsoft", depth: 1 },
  gatech: { x: 195, y: 195, label: "Georgia Tech", depth: 1 },
  vatech: { x: 195, y: 320, label: "Virginia Tech", depth: 1 },
  prodml: { x: 360, y: 45, label: "Production ML", depth: 2 },
  gnn: { x: 360, y: 195, label: "Graph Neural Nets", depth: 2 },
  topology: { x: 360, y: 330, label: "Topology", depth: 2 },
};

const EDGES = [
  { from: "root", to: "microsoft", delay: 0 },
  { from: "root", to: "gatech", delay: 0.06 },
  { from: "root", to: "vatech", delay: 0.12 },
  { from: "microsoft", to: "prodml", delay: 0.6 },
  { from: "gatech", to: "gnn", delay: 0.66 },
  { from: "vatech", to: "gnn", delay: 0.72 },
  { from: "vatech", to: "topology", delay: 0.78 },
];

const NODE_DELAY = { 0: 0, 1: 0.32, 2: 1.02 };

const HeroGraph = () => {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full h-auto max-w-[600px]"
      role="img"
      aria-label="Node graph: Selim connects to Microsoft, Georgia Tech, and Virginia Tech, which connect outward to production machine learning, graph neural networks, and topology."
    >
      <g>
        {EDGES.map(({ from, to, delay }) => {
          const a = NODES[from];
          const b = NODES[to];
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--color-maroon)"
                strokeOpacity="0.15"
                strokeWidth="1.5"
              />
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--color-ember)"
                strokeWidth="1.5"
                pathLength="1"
                className="hg-edge"
                style={{ animationDelay: `${delay}s` }}
              />
            </g>
          );
        })}
      </g>
      <g>
        {Object.entries(NODES).map(([key, n]) => (
          <g
            key={key}
            className={key === "root" ? undefined : "hg-node"}
            style={key === "root" ? undefined : { animationDelay: `${NODE_DELAY[n.depth]}s` }}
          >
            <circle cx={n.x} cy={n.y} r="12" fill="none" stroke="var(--color-maroon)" strokeOpacity="0.25" />
            <circle cx={n.x} cy={n.y} r="5" fill="var(--color-ember)" />
            <text
              x={n.depth === 2 ? n.x - 18 : n.depth === 0 ? n.x + 18 : n.x}
              y={n.depth === 1 ? n.y - 20 : n.y + 26}
              textAnchor={n.depth === 2 ? "end" : n.depth === 0 ? "start" : "middle"}
              className="hg-label"
              style={{
                animationDelay: `${NODE_DELAY[n.depth] + 0.1}s`,
                font: "500 10px var(--font-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fill: "var(--color-ink-soft)",
                stroke: "var(--color-cream)",
                strokeWidth: 4,
                strokeLinejoin: "round",
                paintOrder: "stroke",
              }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default HeroGraph;
