// / Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBTc9RqZJiaZ_d4u_NipYmNS6FMdovSBYQ",
  authDomain: "notification-demo-b337b.firebaseapp.com",
  projectId: "notification-demo-b337b",
  storageBucket: "notification-demo-b337b.appspot.com",
  messagingSenderId: "118932210390",
  appId: "1:118932210390:web:669e90ceff884fb805bf77"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});