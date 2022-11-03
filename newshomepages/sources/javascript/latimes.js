document.querySelectorAll(
  '[data-ad-rendered],#ensNotifyBanner'
).forEach(el => el.style.display = 'none');

setTimeout(function(){
    scroll(0, 100);
    setTimeout( function(){
        document.querySelectorAll('modality-custom-element').forEach(el => el.remove());
    }, 1000)
} , 1000)
