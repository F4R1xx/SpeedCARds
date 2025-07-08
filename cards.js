// cards.js

// Este arquivo funciona como um banco de dados local para todas as cartas do jogo.
// Cada objeto representa uma carta com seus atributos.

export const cards = {
    // Deck: Velocidade Máxima
    mclaren_p1: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=McLaren+P1',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=McLaren',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=UK',
        nome: 'McLaren P1',
        classe: "S",
        ano: 2013,
        pais: 'Reino Unido',
        velocidade: 350,
        aceleracao: 2.8,
        direcao: 95,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: 'Traseira'
    },
    lambo_aventador: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Aventador',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Lambo',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=IT',
        nome: 'Lamborghini Aventador',
        classe: "S",
        ano: 2011,
        pais: 'Itália',
        velocidade: 350,
        aceleracao: 2.9,
        direcao: 92,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: '4x4'
    },
    bugatti_chiron: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Chiron',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Bugatti',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=FR',
        nome: 'Bugatti Chiron',
        classe: "S+",
        ano: 2016,
        pais: 'França',
        velocidade: 420,
        aceleracao: 2.5,
        direcao: 88,
        altura: 'Baixo',
        pneus: 'Desempenho',
        tracao: '4x4'
    },

    // Deck: Lendas Clássicas
    supra_mk4: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Supra+MK4',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Toyota',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
        nome: 'Toyota Supra MK4',
        classe: "A",
        ano: 1993,
        pais: 'Japão',
        velocidade: 250,
        aceleracao: 4.6,
        direcao: 85,
        altura: 'Baixo',
        pneus: 'Esportivo',
        tracao: 'Traseira'
    },
    skyline_r34: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Skyline+R34',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Nissan',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
        nome: 'Nissan Skyline GT-R R34',
        classe: "A",
        ano: 1999,
        pais: 'Japão',
        velocidade: 250,
        aceleracao: 4.9,
        direcao: 88,
        altura: 'Baixo',
        pneus: 'Esportivo',
        tracao: '4x4'
    },
    rx7_fd: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=RX-7+FD',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Mazda',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
        nome: 'Mazda RX-7 FD',
        classe: "A",
        ano: 1992,
        pais: 'Japão',
        velocidade: 250,
        aceleracao: 5.3,
        direcao: 90,
        altura: 'Baixo',
        pneus: 'Esportivo',
        tracao: 'Traseira'
    },

    // Deck: Força Bruta
    challenger_hellcat: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Hellcat',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Dodge',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=USA',
        nome: 'Dodge Challenger Hellcat',
        classe: "B",
        ano: 2015,
        pais: 'EUA',
        velocidade: 320,
        aceleracao: 3.6,
        direcao: 75,
        altura: 'Médio',
        pneus: 'Rua',
        tracao: 'Traseira'
    },
    mustang_gt500: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=GT500',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Ford',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=USA',
        nome: 'Ford Mustang Shelby GT500',
        classe: "A",
        ano: 2020,
        pais: 'EUA',
        velocidade: 290,
        aceleracao: 3.5,
        direcao: 82,
        altura: 'Médio',
        pneus: 'Rua',
        tracao: 'Traseira'
    },
    camaro_zl1: {
        imagem: 'https://placehold.co/600x400/111827/ffffff?text=Camaro+ZL1',
        logo: 'https://placehold.co/100x40/ffffff/000000?text=Chevrolet',
        bandeira: 'https://placehold.co/40x30/ffffff/000000?text=USA',
        nome: 'Chevrolet Camaro ZL1',
        classe: "A",
        ano: 2017,
        pais: 'EUA',
        velocidade: 318,
        aceleracao: 3.5,
        direcao: 84,
        altura: 'Médio',
        pneus: 'Rua',
        tracao: 'Traseira'
    }
};
