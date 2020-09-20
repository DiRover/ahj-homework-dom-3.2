/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-cycle */
import { containerTask, pinnedTasks, arr } from './app';

export default function pin() {
  // клик в кружок
  const circles = document.querySelectorAll('.circle');
  const target = event.target;
  circles.forEach((circle) => {
    if (target === circle) {
      // получаем задачу
      const taskToPinned = target.closest('.task');
      // получаем элемент с текстом задачи
      const task = target.previousSibling;
      // получаем текст задачи
      const content = task.textContent;
      // удаляем задачу из общего списка
      containerTask.removeChild(taskToPinned);
      // убираем текст "No pinned task"
      const index = arr.indexOf(content);
      // убираем задачу из массива для отрисовки в основном списке
      arr.splice(index, 1);
      const noPinnedMsg = document.querySelector('.no_pinned');
      if (noPinnedMsg) {
        pinnedTasks.removeChild(noPinnedMsg);
      }
      // прописываем задачу
      pinnedTasks.innerHTML += `<div class="task"><p class="task_text">${content}</p><div class="circle pin"></div></div>`;
    }
  });
}
