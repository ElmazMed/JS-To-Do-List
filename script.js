let addNewBtn = document.getElementsByClassName('add-new-btn')[0]

addNewBtn.addEventListener('click', () => {
    let isHidden = true
    addNewBtn.classList.toggle("rotate-45")
    
    document.getElementsByClassName('tasks-table')[0].style.transform = "translateY(.5rem)";
})