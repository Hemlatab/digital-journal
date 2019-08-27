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
    this.db = app.firestore()
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
addNote(note) {
    if (!this.auth.currentUser) {
      return null;
    }
    this.db
      .collection('digital_notes')
      .doc(this.auth.currentUser.uid)
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: app.firestore.FieldValue.serverTimestamp(),
      })
      .then(docRef => {
        console.log('Document written with ID', docRef.id);
      })
      .catch(error => {
        console.log('Error adding document', error);
      });
  }

isInitialized() {
    return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
    })
}

getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
}

loadNotes() {
    // Create the query to load the last 12 messages and listen for new ones.
    var query = this.db.collection('notes')
                  
    // Start listening to the query.
    query.onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        var message = change.doc.data();
        console.log(message);
        return message;
      });
    });
  }
  updateNote(id,note){
    this.db
      .collection('digital_notes')
      .doc(this.auth.currentUser.uid)
      .collection('notes')
      .doc(id)
      .update(note)
      .then(() => {
        console.log('Document updated');
      })
      .catch(error => {
        console.log('Error updating document', error);
      });
  
  }
  deleteNote(id){
    this.db
    .collection('digital_notes')
    .doc(this.auth.currentUser.uid)
    .collection('notes')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document deleted');
    })
    .catch(error => {
      console.log('Error removing document', error);
    });
  }

}

export default new Firebase();