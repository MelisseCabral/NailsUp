import firebase from 'firebase';

class AuthController{
    uid = '';
    username = '';
    password = '';
    token = '';

    //Inicializate Firebase 
    constructor()   {
        firebase.initializeApp({
            apiKey: "AIzaSyCi2kQbt9xjCcvu7x-OUaoxA0gH9lwxz3c",
            authDomain: "nailsup-7e965.firebaseapp.com",
            databaseURL: "https://nailsup-7e965.firebaseio.com",
            projectId: "nailsup-7e965",
            storageBucket: "",
            messagingSenderId: "118066102064"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setUid(user.uid);
            }
        });
    }
}