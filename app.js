let deferredPrompt;
const installBtn = document.getElementById('btn-instalar');

// Função simples para checar se é mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Escuta o evento que diz que o app pode ser instalado
window.addEventListener('beforeinstallprompt', (e) => {
    // Previne o Chrome de mostrar a barra automática (para controlarmos quando pedir)
    e.preventDefault();
    
    // Salva o evento para disparar depois
    deferredPrompt = e;
    
    // Se for mobile, mostra o nosso botão
    if (isMobile()) {
        installBtn.style.display = 'block';
    }
});

// Ação do botão de instalar
installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Mostra o prompt nativo do navegador
        deferredPrompt.prompt();
        
        // Espera a escolha do usuário
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Usuário escolheu: ${outcome}`);
        
        // Limpa a variável
        deferredPrompt = null;
        installBtn.style.display = 'none';
    }
});

// Opcional: Tentar travar a tela via JS (Funciona apenas se estiver em Fullscreen e o navegador suportar)
async function lockLandscape() {
    if (screen.orientation && screen.orientation.lock) {
        try {
            await screen.orientation.lock('landscape');
        } catch (error) {
            console.log('Bloqueio de rotação não suportado ou negado pelo navegador.');
        }
    }
}

// Tenta travar ao clicar em qualquer lugar (navegadores exigem interação do usuário)
document.addEventListener('click', lockLandscape);