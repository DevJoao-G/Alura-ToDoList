const modalBox = document.getElementById("modal-box");
const btnNewTask = document.getElementById("btn-addNew");
const btnCloseModal = document.getElementById("close-btn");


// Função para mostrar e fechar o modal
const showmodal = () => modalBox.classList.add("opened");
const closemodal = () => {
    modalBox.classList.remove("opened");
    taskForm.reset();
};

// Função para atualizar a contagem de tarefas
const updateTaskCount = () => {
    const taskCount = taskList.querySelectorAll("li:not(.empty-message)").length;
    taskCountElement.textContent = `${taskCount} task${taskCount !== 1 ? 's' : ''}`;
};
// Event listeners
btnNewTask.addEventListener("click", showmodal);
btnCloseModal.addEventListener("click", closemodal);
// Previne o envio padrão do formulário e cria a tarefa
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const time = document.getElementById("task-time").value;
    
    createTask(title, description, time);
    closemodal();
});

// Fechar modal ao clicar fora dele
modalBox.addEventListener("click", (e) => {
    if (e.target === modalBox) {
        closemodal();
    }
});