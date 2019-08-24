import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config ={
    apiKey: "AIzaSyDY8Ct2Vu-qB1Ee5vlHNbfuOkYgzHjXWzg",
    authDomain: "journal-app-efea6.firebaseapp.com",
    databaseURL: "https://journal-app-efea6.firebaseio.com",
    projectId: "journal-app-efea6",
    storageBucket: "",
    messagingSenderId: "985958482611",
    appId: "1:985958482611:web:6f05be8d075c5100"
  };


class  Firebase{
constructor(){
    app.initializeApp(config)
    this.auth = app.auth()
    this.db =app.firestore()
}
   
login(email,password){
    return this.auth.signInWithEmailAndPassword(email,password)
}
logout(){
    return this.auth.signOut()
}

async register(name,email,password){
    await this.auth.createUserWithEmailAndPassword(email,password)
    return this.auth.currentUser.updateProfile({
        displayName:name
    })
}

isInitialized() {
    return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
    })
}

getCurrentUsername() {
    if(this.auth.currentUser){
        return {isAuthenticated:true,username:this.auth.currentUser.displayName}

    }
    return {isAuthenticated:false}
}

}

export default new Firebase();