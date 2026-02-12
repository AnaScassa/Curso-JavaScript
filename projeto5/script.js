let tarefas = [];

function adicionarTarefa() {
        const tarefa = document.getElementById('inputTarefa').value.trim();
        const data = document.getElementById('inputData').value;
        if(tarefa !== '' && data !== ''){
            tarefas.push({tarefa, data});
        }else{
            alert('Por favor, preencha ambos os campos: tarefa e data.');
        }
    atualizarLista();
    document.getElementById('inputTarefa').value = '';
    document.getElementById('inputData').value = '';
}

function atualizarLista() {
    document.getElementById('listaTarefas').innerHTML = '';
    for(let i = 0; i < tarefas.length; i++){
        if(tarefas[i].data > new Date().toISOString().split('T')[0]){
            document.getElementById('listaTarefas').innerHTML += `<li>${tarefas[i].tarefa} - ${tarefas[i].data} <span style="color: green;">(Em dia)</span><button onclick="removerTarefa(${i})">Remover</button></li>`;
        }else{
            document.getElementById('listaTarefasAtrasadas').innerHTML += `<li>${tarefas[i].tarefa} - ${tarefas[i].data} <span style="color: red;">(Atrasada)</span><button onclick="removerTarefa(${i})">Remover</button></li>`;
        }
}
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    atualizarLista();
}