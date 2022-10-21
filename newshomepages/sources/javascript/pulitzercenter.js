var styles = `
.sumo-form-wrapper, .sumo-form-wrapper.listbuilder-popup {
  display: none;
`;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.sumo-form-wrapper,.listbuilder-popup'
).forEach(el => el.remove())
