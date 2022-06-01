import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "####",
    authDomain: "####",
    projectId: "####",
    storageBucket: "#####",
    messagingSenderId: "#####",
    appId: "#####"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
