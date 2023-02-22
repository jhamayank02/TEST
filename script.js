let extendParaBtn = document.getElementById('extendParaBtn');
let extendedPara = document.getElementById('extendedPara');

extendParaBtn.addEventListener('click', () => {
    extendParaBtn.style.display = 'none';
    extendedPara.style.display = 'inline';
})

let hamburgerBtn = document.getElementById('hamburgerBtn');
let list_items = document.getElementsByClassName('list-items')[0];

hamburgerBtn.addEventListener('click', () => {
    if (list_items.style.display == 'block') {
        list_items.style.display = 'none';
        hamburgerBtn.style.backgroundColor = '#bbbbbb';
    }
    else {
        list_items.style.display = 'block';
        hamburgerBtn.style.backgroundColor = '#1a93d8';
    }
})