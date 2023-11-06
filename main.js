import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', () => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
});