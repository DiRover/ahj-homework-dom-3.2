/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
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
    return null; // останавлтваем дальнейшее выполнение кода, т.к. пустая задача может упасть в опщий список
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
  errorMsg.classList.remove('active');// вдруг было выведено сообщение об ошибке
  if (!containerTask.hasChildNodes()) {
    return null;
  }
  let textInput = text.value;
  // фильтруем
  let filteredList = filterByText(arr, textInput);
  // рисуем отфильтрованный список
  buildTaskList(filteredList, containerTask);
  text.addEventListener('keydown', () => { // рисуем задачи после удаления некоторых символов
    textInput = text.value.slice(0, (text.value.length - 1)); // отризаем последний символ, т.к. перехватывает
    // на первой итерации сразу всё значение, а символ должен быть удалён

    if (event.key === 'Backspace') { // с Backspace не работает keypress
      filteredList = filterByText(arr, textInput);
      buildTaskList(filteredList, containerTask);
    }
  });
});

// закрепляем задачи
containerTask.addEventListener('click', pin);

// открепляем задачу
pinnedTasks.addEventListener('click', unpin);
