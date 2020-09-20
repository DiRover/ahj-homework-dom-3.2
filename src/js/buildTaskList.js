export default function buildTaskList(arr, containerTask) {
  containerTask.innerHTML = '';
  arr.forEach((data) => {
    const elem = document.createElement('div');
    elem.classList.add('task');
    elem.classList.add('all_tasks');
    elem.innerHTML = `<p class="task_text">${data}</p><div class="circle"></div>`;
    containerTask.appendChild(elem);
  });
}
