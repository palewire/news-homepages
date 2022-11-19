document.querySelectorAll('#scrollover-ad-wrap').forEach((e) => e.remove());

document.querySelectorAll(
  '.ad,.ad--epic'
).forEach(el => el.remove())

document.querySelectorAll('body').forEach((e) => {
  e.style.paddingTop = 0;
})
