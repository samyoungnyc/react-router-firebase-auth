import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCiLOzL7NP-vVOiJbjxrNhVTxBd-yKZfOE",
    authDomain: "wallplay-a8440.firebaseapp.com",
    databaseURL: "https://wallplay-a8440.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
