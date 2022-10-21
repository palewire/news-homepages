var styles = `
.notification-soft-optin {
  display: none;
`;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.querySelectorAll(
  '.header-and-footer--banner-ad,.notification-soft-optin'
).forEach(el => el.style.display = 'none')
