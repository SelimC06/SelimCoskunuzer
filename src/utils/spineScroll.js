// Scrolls so the given element is vertically centered in the viewport, but
// never past the page's natural end — capping there instead of overshooting
// keeps whatever comes after `el` (e.g. the footer) fully visible, even if
// it means landing slightly short of dead-center.
//
// `options.minTopElementId`: never land above that element's own top, so a
// section with little content below it (Contact) can't leave the previous
// section's tail end still showing above it.
// `options.mustFitBottomElementId`: never land short of having that
// element's bottom edge fully in view, so e.g. the footer's actual content
// isn't left just below the fold.
function centerElement(el, options = {}) {
    const rect = el.getBoundingClientRect();
    let target = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;

    if (options.minTopElementId) {
        const minEl = document.getElementById(options.minTopElementId);
        if (minEl) {
            const minRect = minEl.getBoundingClientRect();
            target = Math.max(target, window.scrollY + minRect.top);
        }
    }

    if (options.mustFitBottomElementId) {
        const fitEl = document.getElementById(options.mustFitBottomElementId);
        if (fitEl) {
            const fitRect = fitEl.getBoundingClientRect();
            target = Math.max(target, window.scrollY + fitRect.bottom - window.innerHeight);
        }
    }

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

// About (node 2) centers its own photo outright. Contact (node 4) also
// centers its photo, but its floor constraints (never show Experience's
// tail end above it, never cut off the footer) take priority when they
// conflict with exact centering. Experience (node 3) lands at the same
// spot that leaves About's heading at, rather than centering itself.
export function scrollSpineNode(sectionId, targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (sectionId === "about") {
        centerElement(el);
    } else if (sectionId === "contact") {
        centerElement(el, { minTopElementId: "contact", mustFitBottomElementId: "site-footer" });
    } else {
        scrollToMatchAboutLanding(el);
    }
}
