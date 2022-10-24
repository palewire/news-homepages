document.querySelectorAll(
    '#alertesNavigateur,.modal-backdrop,.modal'
  ).forEach(el => el.remove())

document.getElementsByTagName('body')[0].classList.remove("modal-open")
