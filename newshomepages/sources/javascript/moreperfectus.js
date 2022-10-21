var styles = `
.glow, .glow--active {
  display: none;
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.glow,.glow--active'
).forEach(el => el.remove())
