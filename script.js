const push = document.querySelector('#push');
const tasks = document.querySelector('#tasks');
let input = document.querySelector('#newtask input');

const addTask = () => {
    if(input.value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        tasks.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="deleted">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        input.value = "";
    }

    let task = document.querySelectorAll(".task");
    let deleted = document.querySelectorAll('.deleted');
    
    for(let i=0; i<deleted.length;i++){
        deleted[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    for(let i=0;i<task.length;i++){
        task[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
}

input.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        addTask();
    }
});

push.onclick = addTask;