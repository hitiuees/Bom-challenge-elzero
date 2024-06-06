let inputTask = document.querySelectorAll("input")[0];
let btnTask = document.querySelectorAll("button")[0];
let taskArray = [];

btnTask.onclick = function () {
    let inputTasks = inputTask.value.trim();
    if (inputTasks === "") {
        alert("Please enter a task");
    } else {
        let list = document.querySelector(".tasks");
        let value2 = document.createElement("li"); 

        value2.style.width = 'auto';
        value2.style.height = 'auto';
        value2.style.display = 'flex';
        value2.style.alignItems = 'center'; 
        value2.style.justifyContent = 'center'; 
        value2.style.textAlign = 'center';
        value2.style.borderRadius = '4px';
        value2.style.borderRadius='6px'
        value2.style.backgroundColor = 'white';
        value2.textContent = inputTasks;
        list.appendChild(value2); 
        window.localStorage.setItem("task",taskArray);
        taskArray.push(inputTasks);
        console.log(taskArray);
        inputTask.value = "";
        value2.onclick=function(){
            alert(" TASK done🤓");
            value2.style.textDecoration='line-through';
            window.localStorage.removeItem('task',value2)

        } 
    }
};
