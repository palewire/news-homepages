var styles = `
.stat-modal-base {
  display: none;
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.stat-modal-base'
).forEach(el => el.remove())
