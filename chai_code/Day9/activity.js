// task 1
let task1 = document.getElementById('task1');
task1.innerText = 'Task1 have been completed'

// task 2
let task2 = document.getElementById('task2');
task2.style.backgroundColor = 'yellow';

// task 3
let new_div = document.createElement('div')
let node_text = document.createTextNode('The task has been completed')
new_div.appendChild(node_text)

let element = document.getElementById('task3')
let child = document.getElementById('p1')
element.insertBefore(new_div, child)

// task 4
const list = document.getElementById('task4')
const li_ele = document.createElement('li')
li_ele.textContent = 'Chopper'
list.appendChild(li_ele)

// task 5
let task5a = document.getElementById('task5a')
task5a.remove()

// task 6
let taskList = document.getElementById('task6')
if (taskList.lastElementChild) {
    taskList.removeChild(taskList.lastElementChild);
}
