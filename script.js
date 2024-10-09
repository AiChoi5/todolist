const header = document.querySelector("#yourtask h6");
const input = document.querySelector("#newtask input");
const addTask = document.querySelector("#add");
const tasks = document.querySelector("#tasks");
const DoneTask = document.querySelector("#donetask");
const NewTask = () => {
    if(input.value.length == 0){
            header.textContent = "Pls input your task!";
            header.style.fontSize = "7vh";
        } else {
            header.textContent = "Your Task";
            header.style.fontSize = "10vh";
            tasks.innerHTML += `
                <div class="task")
                    <span>${input.value}</span>
                    <button class="delete">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            input.value = "";
        }

        let del = document.querySelectorAll(".delete");
        for (let i=0;i<del.length;i++){
            del[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let task = document.querySelectorAll(".task");
        for (let i=0;i<task.length;i++){
            task[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
}

input.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        NewTask();
    }
});

addTask.onclick = NewTask;