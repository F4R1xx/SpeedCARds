// firebase.js

// Importações principais do Firebase SDK. Adicione outros serviços conforme necessário.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// A configuração do seu projeto Firebase.
// A lógica para usar __firebase_config é uma boa prática para ambientes de produção.
const firebaseConfig = typeof __firebase_config !== 'undefined'
    ? JSON.parse(__firebase_config)
    : {
        apiKey: "AIzaSyDcFoGnrDFSvK2wpcYQC2JoiQT18HPaEIs",
        authDomain: "primeiroprojetoteste01.firebaseapp.com",
        databaseURL: "https://primeiroprojetoteste01-default-rtdb.firebaseio.com",
        projectId: "primeiroprojetoteste01",
        storageBucket: "primeiroprojetoteste01.appspot.com",
        messagingSenderId: "530867320810",
        appId: "1:530867320810:web:65efd67ecdc9eb4639a493",
    };

// Inicializa o Firebase e exporta as instâncias dos serviços que você usará na aplicação.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Exporta as instâncias para que possam ser importadas em outros arquivos.
export { app, auth, db };
