document.getElementsByTagName('body')[0].classList.remove("didomi-popup-open")

document.querySelectorAll(
  '.m-block-ad,.o-pwa-ah2s,.o-ad-container,#didomi-host'
).forEach(el => el.remove())
