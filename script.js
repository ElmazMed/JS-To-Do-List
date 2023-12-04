let addNewBtn = document.getElementsByClassName('add-new-btn')[0]

addNewBtn.addEventListener('click', () => {
    addNewBtn.classList.toggle("rotate-45")
    /* document.getElementsByClassName('tasks-table')[0].classList.toggle("translateY-24");

    document.getElementsByClassName('tasks-area')[0].classList.toggle("v-hidden") */
    
})

let taskInput = document.getElementById('task-inpt')
let taskDescription = document.getElementById('description-inpt')
let taskDate = new Date()
let fullDate = taskDate.getDate() + "/" + (taskDate.getMonth() +1) + "/" + taskDate.getFullYear()
let tasks = []

function addTasksToPage() {
    document.getElementsByClassName("tasks-table")[0].innerHTML = ""
    for(let task of tasks) {
        let tasksContent = 
        `
            <div class="task | d-flex space-between items-center">
                <div class="task-texts">
                    <h3 class="title">${task.title}</h3>
                    <p class="desc">${task.description}</p>
                    <div class="d-flex">
                        <span class="material-symbols-outlined">calendar_month</span>
                        <span class="date">${task.date}</span>
                    </div>
                </div>
                
                <div class="task-cta | d-flex">
                    <span class="material-symbols-outlined | edit">
                        edit
                    </span>
                    <span class="material-symbols-outlined | done">
                        done
                    </span>
                    <span class="material-symbols-outlined | remove">
                        delete
                    </span>
                </div>
            </div>
        `
        document.getElementsByClassName("tasks-table")[0].innerHTML += tasksContent
        removeTask()
        editTask()
    }
}
addTasksToPage()

document.getElementById("add-task-btn").addEventListener('click', ()=> {
    if(taskInput.value == "" && taskDescription.value == "") {
        alert("Please insert a task")
        return
    }

    let newTask = {
        title: taskInput.value,
        description: taskDescription.value,
        date: fullDate,
        isDone: false,
    }
    tasks.push(newTask)
    addTasksToPage()
    taskDescription.value = ""
    taskInput.value = ""

})

function removeTask() {
    let removeBtns = document.getElementsByClassName("remove")
            for(let i = 0; i < removeBtns.length; i++) {
                removeBtns[i].addEventListener("click", ()=>{

                let confrimDelete = confirm("I confrim to delete the task!")
                if(confrimDelete) {
                    tasks.splice(tasks[i], 1)
                    taskDescription.value = ""
                    taskInput.value = ""
                    addTasksToPage()
                }
            })
        }
}

function editTask() {
    let editBtns = document.getElementsByClassName("edit")

    for (let index = 0; index < editBtns.length; index++) {
        let editBtn = editBtns[index];

        editBtn.addEventListener("click", ()=> {
           taskInput.value = tasks[index].title;
           taskDescription.value = tasks[index].description;
        })
        
    }
}