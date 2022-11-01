window.onload = function() {
        var sels = ['.met-footer-toast', '#onesignal-slidedown-container']
        sels.forEach( function(d){
            var el = document.querySelector(d)
            if (el != undefined) {
                el.remove()
            }
        })
 }
location.reload()
