import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBsXUvNfQTIUo2xd6m6zhED8dWispVoFEQ",
    authDomain: "veggie-web-389f2.firebaseapp.com",
    projectId: "veggie-web-389f2",
    storageBucket: "veggie-web-389f2.appspot.com",
    messagingSenderId: "25188332663",
    appId: "1:25188332663:web:c430a71b7b8009e59a4272",
    measurementId: "G-ZXGVNM6N7Z"
}

const fire = firebase.initializeApp(config)
export default fire