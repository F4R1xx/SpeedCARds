// Importa a função de logout do Firebase para ser usada no botão
import { signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

/**
 * Cria e insere o cabeçalho padrão da aplicação em um elemento pai.
 * @param {object} auth - A instância de autenticação do Firebase.
 * @param {object} userData - Os dados do usuário (username, reais, ouro).
 * @param {HTMLElement} parentElement - O elemento HTML onde o cabeçalho será inserido.
 * @param {string} currentPage - O nome da página atual para lógica condicional (ex: 'home', 'loja').
 */
export function createHeader(auth, userData, parentElement, currentPage = '') {
    // Constrói o HTML do cabeçalho dinamicamente com os dados do usuário
    const headerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="glass-panel my-4 flex justify-between items-center flex-wrap gap-4 p-4">
                <!-- Seção do Perfil do Usuário -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold text-lg font-orbitron">
                        ${(userData.username || 'U').charAt(0).toUpperCase()}
                    </div>
                    <span class="text-lg font-bold text-white font-orbitron">${userData.username}</span>
                </div>

                <!-- Seção de Moedas e Ações -->
                <div class="flex items-center gap-2 md:gap-4 flex-wrap justify-end">
                    <!-- Botão para voltar para a Home (não aparece na própria home) -->
                    ${currentPage !== 'home' ? `
                    <a href="home.html" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-2 rounded-lg transition-colors" title="Voltar para Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                        <span class="hidden sm:inline text-sm">VOLTAR</span>
                    </a>` : ''}

                    <div class="bg-green-500/20 text-green-300 font-bold text-sm px-4 py-2 rounded-full">
                        R$ ${userData.reais ? userData.reais.toLocaleString('pt-BR') : '0'}
                    </div>
                    <div class="bg-yellow-500/20 text-yellow-300 font-bold text-sm px-4 py-2 rounded-full">
                        ${userData.ouro || 0} Ouro
                    </div>
                    
                    <!-- Botão Amigos -->
                    <button id="amigosbtn" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-2 rounded-lg transition-colors" title="Amigos">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>
                        <span class="hidden sm:inline text-sm">AMIGOS</span>
                    </button>

                    <!-- Botão Comprar Ouro -->
                    <button id="ourobtn" class="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-2 rounded-lg transition-colors" title="Comprar Ouro">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span class="hidden sm:inline text-sm">COMPRAR OURO</span>
                    </button>

                    <!-- Botão de Logout -->
                    <button id="logout-button-header" class="bg-red-500/20 hover:bg-red-500/40 text-red-300 font-bold p-2 rounded-full transition-colors" title="Sair">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Insere o HTML gerado no elemento pai especificado
    parentElement.innerHTML = headerHTML;

    // Adiciona o evento de clique ao novo botão de logout
    const logoutButton = parentElement.querySelector('#logout-button-header');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            signOut(auth).catch(error => console.error("Erro ao fazer logout:", error));
        });
    }
    const amigosbtn = parentElement.querySelector('#amigosbtn');
    if (amigosbtn) {
        amigosbtn.addEventListener('click', () => {
            window.location.href = './amigos.html'
        });
    }
    const ourobtn = parentElement.querySelector('#ourobtn');
    if (ourobtn) {
        ourobtn.addEventListener('click', () => {
            window.location.href = './ouro.html'
        });
    }
}
