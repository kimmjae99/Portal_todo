document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let todoInput = document.getElementById('todo-input');
    let todoDate = document.getElementById('todo-date');
    let todoList = document.getElementById('todo-list');
    let todoText = todoInput.value.trim();
    let todoDateValue = todoDate.value;
    let formattedDate = formatDate(todoDateValue); // 날짜 형식 변환

    if (todoText !== '') {
        let li = document.createElement('li');
        li.innerHTML = '<span>' + todoText + '</span><span class="date">' + formattedDate + '</span><button class="delete">삭제</button>';
        todoList.appendChild(li);
        todoInput.value = '';
        todoDate.value = '';
    }
});

// 날짜 형식 변환 함수
function formatDate(dateString) {
    let date = new Date(dateString);
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
}

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});
