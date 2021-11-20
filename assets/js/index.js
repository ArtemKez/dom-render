'use strict';

const messageArray = [];
const lists = document.getElementById('lists');
const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {target: {textInput}} = e;
    //после нажатия на кнопку добавлять значение инпута в массив, если оно не пустое
    const inputValue = textInput.value.trim();
    if (inputValue) {
        messageArray.push(inputValue);
        form.reset();
    }
    renderList();
    console.dir(messageArray);
})

function renderList() {
    lists.innerHTML = null;
    for (const value of messageArray) {
        lists.append(createElement('li', {}, value));
    }
}


function createElement(type, {
    classNames = [], typeEvent = {}, onClick = () => {
    }
}, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.addEventListener(typeEvent, onClick);//for example
    elem.append(...children);
    return elem;
}