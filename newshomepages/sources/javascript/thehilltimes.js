document.querySelectorAll(
  '.slide-down,.ads'
).forEach(el => el.remove())

document.querySelectorAll(
  '.content-section'
).forEach(el => {
  el.style.removeProperty('paddingTop');
  el.style.paddingTop = "0px";
})
