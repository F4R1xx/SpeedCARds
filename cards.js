// cards.js

// A base de dados agora está organizada por montadora para facilitar a manutenção.
const manufacturers = {
    "McLaren": {
        P1: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=McLaren+P1',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=McLaren',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=UK',
            nome: 'McLaren P1',
            montadora: 'McLaren', // Adicionado para referência interna
            classe: "S",
            ano: 2013,
            pais: 'Reino Unido',
            velocidade: 350,
            aceleracao: 2.8,
            direcao: 95,
            altura: 'Baixo',
            pneus: 'Desempenho',
            tracao: 'Traseira'
        }
    },
    "Lamborghini": {
        Aventador: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Aventador',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Lambo',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=IT',
            nome: 'Lamborghini Aventador',
            montadora: 'Lamborghini',
            classe: "S",
            ano: 2011,
            pais: 'Itália',
            velocidade: 350,
            aceleracao: 2.9,
            direcao: 92,
            altura: 'Baixo',
            pneus: 'Desempenho',
            tracao: '4x4'
        }
    },
    "Bugatti": {
        Chiron: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Chiron',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Bugatti',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=FR',
            nome: 'Bugatti Chiron',
            montadora: 'Bugatti',
            classe: "S+",
            ano: 2016,
            pais: 'França',
            velocidade: 420,
            aceleracao: 2.5,
            direcao: 88,
            altura: 'Baixo',
            pneus: 'Desempenho',
            tracao: '4x4'
        }
    },
    "Toyota": {
       Mk4: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Supra+MK4',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Toyota',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
            nome: 'Toyota Supra MK4',
            montadora: 'Toyota',
            classe: "A",
            ano: 1993,
            pais: 'Japão',
            velocidade: 250,
            aceleracao: 4.6,
            direcao: 85,
            altura: 'Baixo',
            pneus: 'Esportivo',
            tracao: 'Traseira'
        }
    },
    "Nissan": {
        Skyline_r34: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Skyline+R34',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Nissan',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
            nome: 'Nissan Skyline GT-R R34',
            montadora: 'Nissan',
            classe: "A",
            ano: 1999,
            pais: 'Japão',
            velocidade: 250,
            aceleracao: 4.9,
            direcao: 88,
            altura: 'Baixo',
            pneus: 'Esportivo',
            tracao: '4x4'
        }
    },
    "Mazda": {
        Rx7: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=RX-7+FD',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Mazda',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=JP',
            nome: 'Mazda RX-7 FD',
            montadora: 'Mazda',
            classe: "A",
            ano: 1992,
            pais: 'Japão',
            velocidade: 250,
            aceleracao: 5.3,
            direcao: 90,
            altura: 'Baixo',
            pneus: 'Esportivo',
            tracao: 'Traseira'
        }
    },
    "Dodge": {
        Challenger_Hellcat: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Hellcat',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Dodge',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=EUA',
            nome: 'Dodge Challenger Hellcat',
            montadora: 'Dodge',
            classe: "B",
            ano: 2015,
            pais: 'EUA',
            velocidade: 320,
            aceleracao: 3.6,
            direcao: 75,
            altura: 'Médio',
            pneus: 'Rua',
            tracao: 'Traseira'
        }
    },
    "Ford": {
        Mustang_GT500: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=GT500',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Ford',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=EUA',
            nome: 'Ford Mustang Shelby GT500',
            montadora: 'Ford',
            classe: "A",
            ano: 2020,
            pais: 'EUA',
            velocidade: 290,
            aceleracao: 3.5,
            direcao: 82,
            altura: 'Médio',
            pneus: 'Rua',
            tracao: 'Traseira'
        }
    },
    "Chevrolet": {
        Camaro_ZL1: {
            imagem: 'https://placehold.co/600x400/111827/ffffff?text=Camaro+ZL1',
            logo: 'https://placehold.co/100x40/ffffff/000000?text=Chevrolet',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=EUA',
            nome: 'Chevrolet Camaro ZL1',
            montadora: 'Chevrolet',
            classe: "A",
            ano: 2017,
            pais: 'EUA',
            velocidade: 318,
            aceleracao: 3.5,
            direcao: 84,
            altura: 'Médio',
            pneus: 'Rua',
            tracao: 'Traseira'
        },
        CorvetteZ062015: {
            imagem: './Imgs_Carros/Chevrolet/CorvetteZ062015.png',
            logo: './assets/Chevrolet-Logo.png',
            bandeira: 'https://placehold.co/40x30/ffffff/000000?text=EUA',
            nome: 'Corvette Z06 6.2 V8',
            montadora: 'Chevrolet',
            classe: "S",
            ano: 2015,
            pais: 'EUA',
            velocidade: 330,
            aceleracao: 3,
            direcao: 75,
            altura: 'Baixo',
            pneus: 'Desempenho',
            tracao: 'Traseira'
        }
    }
};

// **A MÁGICA ACONTECE AQUI**
// Nós criamos um objeto 'cards' plano a partir da estrutura de montadoras.
// Isso garante que o resto do seu aplicativo continue funcionando sem precisar de nenhuma alteração.
const allCards = {};
for (const manufacturer in manufacturers) {
    Object.assign(allCards, manufacturers[manufacturer]);
}

// Exportamos o objeto plano para manter a compatibilidade.
export const cards = allCards;
