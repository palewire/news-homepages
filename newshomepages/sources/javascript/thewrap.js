var styles = `
#attentive_overlay {
  display: none;
`;
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '#attentive_overlay'
).forEach(el => el.remove())
