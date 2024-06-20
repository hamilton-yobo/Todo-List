<h2>Documentação do Todo List</h2>

<h4>Descrição</h4>

Este é um aplicativo simples de lista de tarefas desenvolvido em HTML, CSS e JavaScript, projetado para permitir aos usuários adicionar, visualizar e deletar tarefas. As tarefas são armazenadas localmente no navegador utilizando localStorage, o que garante que elas persistam mesmo após a atualização da página.
Funcionalidades

  Adicionar uma nova tarefa digitando o texto no campo de entrada e clicando no botão "Add Task".
  Visualizar todas as tarefas adicionadas em uma lista.
  Deletar uma tarefa clicando no botão "Delete" ao lado dela na lista.

<h4>Tecnologias Utilizadas</h4>
<div>
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</div>
Como Usar

Clone o repositório

  bash

    git clone https://github.com/hamilton-yobo/Todo-List.git
    cd Todo-List

Abra o aplicativo
        Abra o arquivo index.html em qualquer navegador web.
        Você verá uma interface simples com um campo de entrada para adicionar tarefas e uma lista onde as tarefas serão exibidas.

    Adicione uma tarefa
        Digite o nome da tarefa no campo de entrada.
        Clique no botão "Add Task" para adicionar a tarefa à lista.

    Deletar uma tarefa
        Para deletar uma tarefa, clique no botão "Delete" ao lado dela na lista.
        A tarefa será removida tanto da lista quanto do armazenamento local.

    Persistência de dados
        As tarefas adicionadas serão salvas no localStorage do navegador.
        Mesmo se você fechar a página ou atualizar o navegador, as tarefas permanecerão na lista.

Personalização

Você pode personalizar a aparência e o comportamento do aplicativo editando os arquivos styles.css e script.js. Por exemplo, você pode modificar cores, fontes, adicionar animações, ou implementar funcionalidades adicionais, como marcar tarefas como completas.
Exemplo de Código

Aqui está um exemplo do código JavaScript utilizado para adicionar tarefas:

javascript

// Function to add a new task
function addTodo() {
    const task = todoInput.value;
    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        todoList.appendChild(li);
        saveTodoToLocalStorage(task);
        todoInput.value = '';
    }
}

Contribuições

Contribuições são bem-vindas! Se você tiver sugestões para melhorar este aplicativo de lista de tarefas, sinta-se à vontade para abrir um pull request ou issue no GitHub.
Autor

    Hamilton Yobo
    programmyobo@gmail.com

Palavras Finais

Obrigado por usar este aplicativo de lista de tarefas! Esperamos que seja útil para você gerenciar suas tarefas diárias de forma eficiente. Se tiver alguma dúvida ou feedback, não hesite em entrar em contato.
