document.querySelector('#scrollover-ad-wrap').remove()

document.querySelectorAll(
  '.ad,.ad--epic'
).forEach(el => el.remove())

document.querySelector('body').style.paddingTop = 0;
