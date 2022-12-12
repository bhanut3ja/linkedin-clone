import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA_MIvxPdy15Dpg4S4UVTIcWHpq34z9EI",
    authDomain: "linked-clone-c998c.firebaseapp.com",
    projectId: "linked-clone-c998c",
    storageBucket: "linked-clone-c998c.appspot.com",
    messagingSenderId: "481169122164",
    appId: "1:481169122164:web:bde8784f073be3bfa5c221"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;
