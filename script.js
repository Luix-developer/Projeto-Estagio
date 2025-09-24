document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de alternância do modo escuro
    const modeToggle = document.querySelector('.mode-toggle');
    // Seleciona o corpo do documento para adicionar a classe
    const body = document.body;

    // Função para verificar e aplicar a preferência do usuário
    const applySavedMode = () => {
        // Verifica o armazenamento local para a preferência de modo
        const savedMode = localStorage.getItem('theme-mode');
        if (savedMode === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    // Aplica o modo salvo quando a página é carregada
    applySavedMode();

    // Adiciona o ouvinte de evento para o clique no botão
    modeToggle.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no corpo do documento
        body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário no armazenamento local
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme-mode', 'dark');
        } else {
            localStorage.setItem('theme-mode', 'light');
        }
    });
});