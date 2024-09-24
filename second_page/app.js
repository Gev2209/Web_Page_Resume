const arrow_left = document.querySelector('.fa-arrow-left');
const arrow_right = document.querySelector('.fa-arrow-right');
const article_page = document.querySelector('article');
const articles_page = document.getElementById('articles');

let inputName = document.querySelector('.name_pic');
const btn_message = document.querySelector('.btn');
const history_text = document.querySelector('.histoy_list_li');
const text_contents = document.querySelector('.history_text_content');
const btnDelete = document.querySelector('.btn_delete');


let count = 0;
let list_texts = [];
const name = 'Gevorg';

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
        for (let i = 0; i < 1; i++) {
            const elementUl = document.createElement('ul');
            const elementLi = document.createElement('li');
            const elementIcon = document.createElement('i');
        
        elementIcon.classList.add('fa-solid', 'fa-bars');
            
        elementLi.textContent = `${name}: ${inputName.value} `;
        elementLi.appendChild(elementIcon);

        list_texts.push(elementUl.appendChild(elementLi).value);
        console.log(list_texts,'adadaddsdads');
        
        
        
        
        // text_contents.appendChild(elementUl);

        if (inputName.value.trim() === '') {
            return;
        } else {
            text_contents.appendChild(elementUl);
            list_texts.push(inputName.value.trim());
            
        }
        }
        inputName.value = null;
        return list_texts
        // console.log(list_texts,'Add listttt');
        
}
inputName.addEventListener('keypress',function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handle_btn_text();
    }
});



const handle_btn_delet = () => {
    text_contents.innerHTML = ''

    list_texts = [];
}   

btnDelete.addEventListener('click',handle_btn_delet);

btn_message.addEventListener('click',handle_btn_text);
arrow_right.addEventListener('click',handle_picture_increment);
arrow_left.addEventListener('click',handle_picture_decrement);



