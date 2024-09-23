const arrow_left = document.querySelector('.fa-arrow-left');
const arrow_right = document.querySelector('.fa-arrow-right');
const article_page = document.querySelector('article');
const articles_page = document.getElementById('articles');

const inputNamme = document.querySelector('.name_pic');
const btn_message = document.querySelector('.btn');
const history_text = document.querySelector('.histoy_list_li');
const text_contents = document.querySelector('.history_text_content');


let count = 0;
const list_texts = [];

const counters = {
    0:'none',
    1:'url("./image/poject_1.jpg")',
    2:'url("./image/poject_3.jpg")',
    3:'url("./image/portrait_1.avif")',
}

const handle_picture_increment = () => {
    count++;
    articles_page.style.backgroundImage = counters[count];
}

const handle_picture_decrement = () => {
    count--;
    if (count < 0) {
        return;
    }
    articles_page.style.backgroundImage = counters[count];
}

const handle_btn_text = () => {
        const name = 'Gevorg';
        list_texts.push(inputNamme.value);
        for (let i = 0; i < 1; i++) {
        const elementUl = document.createElement('ul');
        const elementLi = document.createElement('li');
        console.log(elementUl,'>>>>elementUl');
        elementLi.textContent = `${name}: ${inputNamme.value}`;
        elementUl.appendChild(elementLi)
        text_contents.appendChild(elementUl)
        }
}

btn_message.addEventListener('click',handle_btn_text);
arrow_right.addEventListener('click',handle_picture_increment);
arrow_left.addEventListener('click',handle_picture_decrement);



