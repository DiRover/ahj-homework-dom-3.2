const text = document.querySelector('[data-text="task-text"]');
let containerTask = document.querySelector('[data-task="data-task"]');
const enterTask = document.querySelector('.enter_task');
const errorMsg = document.querySelector('.error_msg');
const pinnedTasks = document.querySelector('.pinned_container');
let tasksAll;
let data;

text.addEventListener('keypress', getInputData);
/*text.addEventListener('input', filterTask);

function filterTask() {
    console.log(arr)
    tasksAll.forEach((item) => {
        if (!item.textContent.startsWith(data)) {
            item.classList.add('hidden');
        }
    })
    tasksAll.forEach((item) => {
        item.classList.remove('hidden')
        
    })
}*/

function getInputData() {
    data = text.value;
    const key = event.key;
    if (key === 'Enter') {
        event.preventDefault();
        if (data.length !== 0) {
            errorMsg.classList.remove('active');
            containerTask.innerHTML += `<div class="task"><p>${data}</p><div class="circle"></div></div>`;
            arr.push(data);
            text.value = '';
            tasksAll = document.querySelectorAll('.task');
        } else {
            errorMsg.classList.add('active');
        }
        event.preventDefault();
    }
}

containerTask.addEventListener('click', pin);
function pin() {
    const circle = document.querySelector('.circle');
    const target = event.target;
    if (target === circle) {
        console.log('ok');
        const parent = target.closest('.task');
        const task = target.previousSibling;
        const content = task.textContent;
        console.log(task.textContent);
        containerTask.removeChild(parent);
        pinnedTasks.textContent = '';
        pinnedTasks.innerHTML += `<div class="task"><p>${content}</p><div class="circle">V</div></div>`;
        
    }
}