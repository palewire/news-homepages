document.querySelectorAll(
  '#top_banner,#topBanner'
).forEach(el => el.remove())

var styles = `
.onesignal-slidedown-container {
  display: none !important;
  visibility: hidden;
  position: absolute;
  right: -1000000;
}
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

function getZ (el) {
  const z = parseFloat(window.getComputedStyle(el).zIndex);
  if (Number.isNaN(z)) {
    return 0;
  } else {
    return z;
  }
}
const eleList = Array.from(document.querySelectorAll('body *'));
eleList.filter(el => getZ(el) > 10000).forEach(el => el.remove());
