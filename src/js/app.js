const text = document.querySelector('[data-text="task-text"]');
let data;

console.log(value);
text.addEventListener('keypress', getInputData);

function getInputData() {
    const key = event.key;
    if (key === 'Enter') {
        data = text.value;
        text.value = '';
        event.preventDefault();
    }
}