/* eslint-disable no-shadow */
function filterBy(tasks, containsText) {
  // console.log(tasks);
  // возвращаем отфильтрованный массив с задачами
  return tasks.filter(containsText);
}

function containsText(task, textInput) {
  // clean - вводимый текст, убираем пробелы и приводим к нижнему регистру
  const clean = textInput.trim().toLowerCase();
  // проверям содержит ли задача из массива arr вводимый текст
  return task.toLowerCase().startsWith(clean);
}

// общая функция фильтрации
export default function filterByText(tasks, textInput) {
  return filterBy(tasks, (task) => (
    containsText(task, textInput)
  ));
}
