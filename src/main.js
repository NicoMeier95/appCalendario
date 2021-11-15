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
    apiKey: "AIzaSyBjAX2_vN6OSMr55wAmnbniR_SVSGMjvEw",
    authDomain: "vue-calendario-70363.firebaseapp.com",
    projectId: "vue-calendario-70363",
    storageBucket: "vue-calendario-70363.appspot.com",
    messagingSenderId: "372668901971",
    appId: "1:372668901971:web:a73a1c1114700d001bf4a6"
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