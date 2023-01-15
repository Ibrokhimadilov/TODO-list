const form = document.querySelector("#todolist-form");
const input = document.querySelector("#todolist-adder-input");
const btn_del_all = document.querySelector("#delete-all");
const todo_collection = document.querySelector("#todolist-collection");
const btn = document.getElementById("clear");
const a = document.getElementById("a");

const yes = document.getElementById("yes");
const no = document.getElementById("no");





form.addEventListener('submit', addPost);


function addPost(e) {
    e.preventDefault();


    const inputValue = input.value;

    const todolistLi = document.createElement('li');
    todolistLi.classList.add('collection__item');
    const todolistText = document.createElement('p');
    todolistText.classList.add('crEl');
    todolistText.innerText = inputValue;


    todolistLi.appendChild(todolistText);
    todo_collection.appendChild(todolistLi);

    const wrapBlock = document.createElement('div');
    wrapBlock.className = "btn_desc";
    const complate = document.createElement('button');
    complate.className = "check_btn  wrap";
    complate.innerHTML = `<i class="bi bi-check-circle"></i> Complate`;


    const edit = document.createElement('button');
    edit.className = "edit_btn  wrap";
    edit.innerHTML = ` <i class="bi bi-pencil-square"></i> Edit`;

    const time = document.createElement('button');
    time.className = "time_btn  wrap";
    time.innerHTML = `<i class="bi bi-clock"></i> ${new Date().getHours()} : ${new Date().getMinutes()}`;

    const delet = document.createElement('button');
    delet.className = "del_btn  wrap";
    delet.innerHTML = ` <i class="bi bi-trash3"></i> Delete`

    wrapBlock.appendChild(complate);
    wrapBlock.appendChild(edit);
    wrapBlock.appendChild(time);
    wrapBlock.appendChild(delet);

    todolistLi.appendChild(wrapBlock);


   


    edit.addEventListener('click', () => {
      alert("Uzur input ketishinikilomadim, usganing uchun complete knopakasi ishlamayapti")
    });

    complate.addEventListener('click', ()=> {
        const s = document.createElement("s")
        todolistText.replaceWith(s)
        s.classList.add('crEl');
        s.innerText = inputValue;
    })


    delet.addEventListener('click', () => {

        if (todo_collection) {
            todolistLi.style.display = 'none'
        } console.log(404);
    });

    input.value = '';

}


const icon = input.value;

btn.addEventListener('click', () => {
    if (icon.trim().length >= 0) {
        input.value = '';
    }

});


const modal = document.getElementById("todoModalka");
const pustoy = document.getElementById("pustoy");


btn_del_all.addEventListener('click', () => {
  
    if (todo_collection.firstChild) {
        if (modal.style.cssText = `display: none`) {
            modal.style.cssText = `display: block`;
        }
    }

});





yes.addEventListener('click', () => {
    if (todo_collection.childNodes.length) {
        todo_collection.innerHTML = '';
        pustoy.innerHTML = '';
        modal.style.cssText = `display: none`;
    }
});

no.addEventListener('click', () => {
    const block = modal.style.cssText = `display: block`;
    if (block) {
        modal.style.cssText = `display: none`;
    }
});
