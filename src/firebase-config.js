import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyBTc9RqZJiaZ_d4u_NipYmNS6FMdovSBYQ",
    authDomain: "notification-demo-b337b.firebaseapp.com",
    projectId: "notification-demo-b337b",
    storageBucket: "notification-demo-b337b.appspot.com",
    messagingSenderId: "118932210390",
    appId: "1:118932210390:web:669e90ceff884fb805bf77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;
