// Scrolls so the given element is vertically centered in the viewport, but
// never past the page's natural end — capping there instead of overshooting
// keeps whatever comes after `el` (e.g. the footer) fully visible, even if
// it means landing slightly short of dead-center.
function centerElement(el) {
    const rect = el.getBoundingClientRect();
    const target = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: Math.min(Math.max(0, target), maxScroll), behavior: "smooth" });
}

// Scrolls so `el` lands at whatever viewport Y About's heading would land at
// if About's photo were centered — keeps every other node's landing spot
// visually consistent with node 2's, instead of each section centering
// itself independently (which put different sections at different heights).
function scrollToMatchAboutLanding(el) {
    const photo = document.getElementById("about-photo");
    const aboutHeading = document.getElementById("about-heading-block");
    if (!photo || !aboutHeading) return centerElement(el);

    const photoRect = photo.getBoundingClientRect();
    const headingRect = aboutHeading.getBoundingClientRect();
    const scrollDeltaForPhotoCenter = photoRect.top - (window.innerHeight - photoRect.height) / 2;
    const aboutHeadingLandingY = headingRect.top - scrollDeltaForPhotoCenter;

    const elRect = el.getBoundingClientRect();
    const target = window.scrollY + elRect.top - aboutHeadingLandingY;
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
}

// About and Contact (nodes 2 and 4) each center their own photo. Experience
// (node 3) lands at the same spot that leaves About's heading at, rather
// than centering itself.
export function scrollSpineNode(sectionId, targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (sectionId === "about" || sectionId === "contact") {
        centerElement(el);
    } else {
        scrollToMatchAboutLanding(el);
    }
}
