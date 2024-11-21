// Seleção de elementos do html que vou manipulat
const btnAdd = document.getElementById('btnAdd');
const inputAtividade = document.getElementById('atividade');
const selectPrioridade = document.getElementById('prioridade');
const listaTarefas = document.getElementById('tarefas-lista');

// Função para adicionar tarefa
btnAdd.addEventListener('click', () => {
    const atividade = inputAtividade.value.trim(); //A função trim() remove espaços extras no início e no final da string.
    const prioridade = selectPrioridade.value;
// se o campo atividade não estiver vazio
    if (atividade) { 
        // cria um novo elemento na lista
        const li = document.createElement('li');
        li.classList.add(prioridade + '-priority'); 

        // Texto da tarefa
        //A variável textoTarefa cria um elemento <span> que exibirá 
        //a descrição da tarefa. O conteúdo do span é definido como o valor da variável atividade.
        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = atividade;

        // Mudar a cor do texto com base na prioridade
        if (prioridade === 'baixo') {
            textoTarefa.style.color = '#0fff17'; // verde
        } else if (prioridade === 'media') {
            textoTarefa.style.color = '#fce300'; // amarelo
        } else if (prioridade === 'alta') {
            textoTarefa.style.color = '#ff0019'; // vermelho
        }

        // Botões de editar, cancelar e confirmar
        const btnEditar = document.createElement('button');
        btnEditar.classList.add('icon-btn');
        btnEditar.innerHTML = '✏️';
        btnEditar.addEventListener('click', () => editarTarefa(li, textoTarefa));

        const btnCancelar = document.createElement('button');
        btnCancelar.classList.add('icon-btn');
        btnCancelar.innerHTML = '❌';
        btnCancelar.addEventListener('click', () => li.remove());

        const btnConfirmar = document.createElement('button');
        btnConfirmar.classList.add('icon-btn');
        btnConfirmar.innerHTML = '✔️';
        btnConfirmar.addEventListener('click', () => confirmarEdicao(li, textoTarefa));

        // Adicionando elementos ao li
        li.appendChild(textoTarefa);
        li.appendChild(btnEditar);
        li.appendChild(btnCancelar);
        li.appendChild(btnConfirmar);

        // Adicionando li na lista
        listaTarefas.appendChild(li);

        // Limpar campo
        inputAtividade.value = '';
    } else {
        alert('Por favor, insira uma atividade.');
    }
});

// Função para editar tarefa  é chamada quando o botão de editar é clicado. Ela utiliza prompt para pedir ao usuário um novo texto para a tarefa. 
function editarTarefa(li, textoTarefa) {
    const novoTexto = prompt('Editar tarefa:', textoTarefa.textContent);
    if (novoTexto) {
        textoTarefa.textContent = novoTexto;
    }
}

// Função para confirmar edição e remover a tarefa
function confirmarEdicao(li, textoTarefa) {
    alert('Tarefa confirmada: ' + textoTarefa.textContent);
    li.remove(); // Remove a tarefa após confirmação
}
