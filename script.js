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

let languageDropdown = document.getElementById('languageDropdown');
let languageDropdownBG = document.getElementsByClassName('languageDropdownBG')[0];
let languageOptions = document.getElementsByClassName('languageOptions')[0];

languageDropdown.addEventListener('click', () => {
    if (languageOptions.style.display == 'block') {
        languageDropdownBG.style.backgroundImage = 'url(./images/arrow_drop_down.png)';
        languageOptions.style.display = 'none';
    }
    else {
        languageDropdownBG.style.backgroundImage = 'url(./images/arrow_drop_up.png)';
        languageOptions.style.display = 'block';
    }
})

let languageDropdownResponsive = document.getElementById('languageDropdownResponsive');
let languageBox = document.getElementsByClassName('languageBox')[0];
let languageDropdownBG_1 = document.getElementsByClassName('languageDropdownBG')[1];

languageDropdownResponsive.addEventListener('click', () => {
    if (languageBox.style.display == 'block') {
        languageDropdownBG_1.style.backgroundImage = 'url(./images/arrow_drop_down.png)';
        languageBox.style.display = 'none';
    }
    else {
        languageDropdownBG_1.style.backgroundImage = 'url(./images/arrow_drop_up.png)';
        languageBox.style.display = 'block';
    }
})