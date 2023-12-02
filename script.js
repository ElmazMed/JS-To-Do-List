let addNewBtn = document.getElementsByClassName('add-new-btn')[0]

addNewBtn.addEventListener('click', () => {
    addNewBtn.classList.toggle("rotate-45")
    /* document.getElementsByClassName('tasks-table')[0].classList.toggle("translateY-24");

    document.getElementsByClassName('tasks-area')[0].classList.toggle("v-hidden") */
    
})

let tasks = [
    
]

let taskInput = document.getElementById('task-inpt')
let taskDescription = document.getElementById('description-inpt')
let taskDate = new Date()
console.log(taskDate);
let fullDate = taskDate.getDate() + "/" + (taskDate.getMonth() +1) + "/" + taskDate.getFullYear()

document.getElementById("add-task-btn").addEventListener('click', ()=> {

    let newTask = {
        title: taskInput.value,
        description: taskDescription.value,
        date: fullDate,
        isDone: false,
    }
    tasks.push(newTask)

    if(taskInput.value == "" && taskDescription.value == "") {
        alert("Please insert a task")
        return
    }

    document.getElementsByClassName('tasks-table')[0].innerHTML += `  
    <div class="task | d-flex space-between items-center">
        <div class="task-texts">
            <h3 class="title">${newTask.title}</h3>
            <p class="desc">${newTask.description}</p>
            <div class="d-flex">
                <span class="material-symbols-outlined">calendar_month</span>
                <span class="date">${newTask.date}</span>
            </div>
        </div>
        <div class="task-cta | d-flex">
            <span id="edit" class="material-symbols-outlined">
                edit
            </span>
            <span class="material-symbols-outlined | done">
                done
            </span>
            <span id="remove" class="material-symbols-outlined">
                delete
            </span>
        </div>
    </div>
`
taskDescription.value = ""
taskInput.value = ""
doneBtn()
})

function doneBtn(){
    let doneBtns = document.getElementsByClassName("done")

for(let doneBtn of doneBtns) {
    doneBtn.addEventListener("click", ()=> {
       let tsaksContainer = document.getElementsByClassName("task")

       for(let tsakContainer of tsaksContainer) {
        tsakContainer.style.backgroundColor = "#dadada"
       }
    })
}
}