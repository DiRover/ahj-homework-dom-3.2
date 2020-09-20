/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import filterByText from './filterByText';
import pin from './pin';
import unpin from './unpin';
import buildTaskList from './buildTaskList';

const text = document.querySelector('[data-text="task-text"]');
export const containerTask = document.querySelector('[data-task="data-task"]');
const errorMsg = document.querySelector('.error_msg');
export const pinnedTasks = document.querySelector('.pinned_container');
const form = document.querySelector('.form');
// отдельный массив для задач, больше нужен при фильтрации
export const arr = [];

// вводим задачу
// вся штука здесь, подписываемся на форму! у неё событие сабмит
// после нажатия enter рисуется полный список из arr
// при инуте рисуется отфильтрованный список
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // если поле ввода пустое выкидываем ошибку
  if (text.value === '') {
    errorMsg.classList.add('active');
  }
  const task = text.value;
  arr.push(task);
  // скидываем значение в поле ввода
  form.reset();
  // рисуем список
  buildTaskList(arr, containerTask);
});

// фильтруем список задач
text.addEventListener('input', () => {
  // есди нет задач, не выполняем дальше код
  if (!containerTask.hasChildNodes()) {
    return null;
  }
  const textInput = text.value;
  // фильтруем
  const filteredList = filterByText(arr, textInput);
  // рисуем отфильтрованный список
  buildTaskList(filteredList, containerTask);
});

// закрепляем задачи
containerTask.addEventListener('click', pin);

// открепляем задачу
pinnedTasks.addEventListener('click', unpin);
