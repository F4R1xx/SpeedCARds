const cartas = {
    Toyota_1: {
        imagem: '/Cards/Toyota/SupraMK5.png',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1024px-Toyota_carlogo.svg.png',
        bandeira: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        nome: 'Supra MK5 3.0',
        classe: "A",
        ano: 2022,
        pais: 'Japão',
        velocidade: 250,
        aceleracao: 4.5,
        direcao: 85,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: 'Traseira'
    },
    Toyota_2: {
        imagem: '/Cards/Toyota/SupraMK4.png',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1024px-Toyota_carlogo.svg.png',
        bandeira: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        nome: 'Supra MK4 3.0',
        classe: "A",
        ano: 1995,
        pais: 'Japão',
        velocidade: 250,
        aceleracao: 4.6,
        direcao: 77,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: 'Traseira'
    },
      Toyota_3: {
        imagem: '/Cards/Toyota/GRCorolla.png',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1024px-Toyota_carlogo.svg.png',
        bandeira: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
        nome: 'GR Corolla 1.6',
        classe: "B",
        ano: 2022,
        pais: 'Japão',
        velocidade: 230,
        aceleracao: 5.5,
        direcao: 80,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: '4x4'
    }
};

function exibirCarta(id) {
    const carta = cartas[id];
    if (!carta) return;

    const container = document.getElementById('card-container');
    container.innerHTML = `
      <div id="card-carta" style="background-image: url('${carta.imagem}')">
        <div id="card-top">
          <div id="card-logo">
            <img id="card-logo-img" src="${carta.logo}" alt="logo">
            <span id="card-nome">${carta.nome}</span>
          </div>
          <div id="card-ano-pais">
            <span id="card-ano">${carta.ano}</span>
            <img id="card-bandeira" src="${carta.bandeira}" alt="bandeira">
          </div>
        </div>
        <div id="card-stats">
          <div id="card-velocidade">${carta.velocidade}<span id="card-velocidade-label">VEL. MÁX.</span></div>
          <div id="card-aceleracao">${carta.aceleracao}<span id="card-aceleracao-label">0-100 KM/H</span></div>
          <div id="card-direcao">${carta.direcao}<span id="card-direcao-label">DIREÇÃO</span></div>
        </div>
        <div id="card-bottom">
          <div id="card-tag">${carta.classe}</div>
          <div class="card-info">
            <strong id="card-altura-label">Altura</strong>
            <span id="card-altura-valor">${carta.altura}</span>
          </div>
          <div class="card-info">
            <strong id="card-pneus-label">PNEUS</strong>
            <span id="card-pneus-valor">${carta.pneus}</span>
          </div>
          <div class="card-info">
            <strong id="card-tracao-label">${carta.tracao}</strong>
            <span id="card-tracao-info">TRAÇÃO</span>
          </div>
        </div>
      </div>
    `;
}

export { exibirCarta, cartas };
