const main = document.querySelector('.main');
const input = document.querySelector('input');
const list = document.querySelector('#list');
const button = document.querySelector('button');

button.addEventListener('click',(e) => {
    if(input.value) {
        const todo = document.createElement('li');
        todo.classList.add('todo')
        main.appendChild(todo);
        todo.innerText = input.value;
        const button = document.createElement("button");
        button.classList.add('btn')
        button.innerText = "delete";
        button.addEventListener('click',() => {
            list.removeChild(todo);
        })
        todo.appendChild(button)
        list.appendChild(todo);
        input.value = "";
    }

})






