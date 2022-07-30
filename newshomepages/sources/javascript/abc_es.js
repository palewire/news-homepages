const eleList = Array.from(document.querySelectorAll('body *'));
eleList.filter(el => getZ(el) > 9000).forEach(el => el.remove());
