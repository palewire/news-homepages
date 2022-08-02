document.querySelectorAll(
  '.slide-down,.ads'
).forEach(el => el.remove())

var styleSheet = document.createElement('style');
styleSheet.innerText = '.content-section { padding-top: 0 !important; }';
document.head.appendChild(styleSheet);

document.querySelectorAll(
  '.content-section'
).forEach(el => {
  el.style.removeProperty('paddingTop');
  el.style.paddingTop = "0px";
})
