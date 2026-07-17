// Fixed border around the whole viewport, styled like the sheet border on a
// technical drawing — reinforces the site-as-schematic concept on every scroll
// position without competing with section content.
const SheetFrame = () => (
    <div className="fixed inset-2.5 md:inset-4 z-30 pointer-events-none border border-maroon/20">
        <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-maroon/60" />
        <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-maroon/60" />
        <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-maroon/60" />
        <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-maroon/60" />
    </div>
);

export default SheetFrame;
