// Scrolls so the given element is vertically centered in the viewport.
function centerElement(el) {
    const rect = el.getBoundingClientRect();
    const target = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
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

// About (node 2) centers its own photo. Every other section with a
// centerTargetId (Experience, Contact) lands at the same spot that leaves
// About's heading at, rather than centering itself.
export function scrollSpineNode(sectionId, targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (sectionId === "about") {
        centerElement(el);
    } else {
        scrollToMatchAboutLanding(el);
    }
}
