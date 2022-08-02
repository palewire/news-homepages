function getZ (el) {
  const z = parseFloat(window.getComputedStyle(el).zIndex);
  if (Number.isNaN(z)) {
    return 0;
  } else {
    return z;
  }
}
const eleList = Array.from(document.querySelectorAll('body *'));
eleList.filter(el => getZ(el) > 9000).forEach(el => el.remove());
