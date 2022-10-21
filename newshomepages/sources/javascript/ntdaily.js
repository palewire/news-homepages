var styles = `
.mc-modal,.mc-modal-bg {
  display: none;
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.mc-modal,.mc-modal-bg'
).forEach(el => el.remove())
