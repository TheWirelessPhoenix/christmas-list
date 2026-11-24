import './style.css'

// If a store's image CDN blocks hotlinking, the inline onerror handler marks the
// plate, and CSS swaps in a typographic label instead of a broken-image icon.
// This also catches images that failed before this module ran.
for (const img of document.querySelectorAll('.plate img')) {
  if (img.complete && img.naturalWidth === 0) {
    img.closest('.plate')?.classList.add('is-missing')
  }
}
