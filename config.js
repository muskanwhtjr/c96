import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDlNsJj0EA5sEIGMrNGH1bmvZ-rvfcx9Ck",
  authDomain: "reminderapp-4aacc.firebaseapp.com",
  projectId: "reminderapp-4aacc",
  storageBucket: "reminderapp-4aacc.appspot.com",
  messagingSenderId: "916702804066",
  appId: "1:916702804066:web:73ac7b33ea38f945c0b93b",
  measurementId: "G-4WBS2RYVQG"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase.database()