'use strict';

const inputText = document.querySelector('.js_input');
const numberKey = document.querySelector('.js_nk');
const key = document.querySelector('.js_k');
const code = document.querySelector('.js_c');


function handleWrite(event) {
  numberKey.innerHTML = event.keyCode;
  key.innerHTML = event.key;
  code.innerHTML = event.code;
  inputText.value = '';
}

inputText.addEventListener('keyup', handleWrite);