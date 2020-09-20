/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
import { containerTask, pinnedTasks, arr } from './app';

export default function unpin() {
  // получаем список закреплённых задач
  const pinned = document.querySelectorAll('.pin');
  const target = event.target;
  pinned.forEach((pin) => {
    if (target === pin) {
      // получаем задачу для открепления
      const taskToUnpinned = target.closest('.task');
      const task = target.previousSibling;
      const content = task.textContent;
      // возвращаем задачу в массив, не обязателно это делать и так работает
      arr.push(content);
      // удаляем из списка закреплённых
      pinnedTasks.removeChild(taskToUnpinned);
      containerTask.innerHTML += `<div class="task"><p class="task_text">${content}</p><div class="circle"></div></div>`;
    }
  });
  // если список пуст добавляем текст "No pinned tasks"
  if (!pinnedTasks.hasChildNodes()) {
    pinnedTasks.innerHTML = '<p class="no_pinned">No pinned tasks</p>';
  }
}
