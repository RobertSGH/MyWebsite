import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC6MbzC_lRGyECrIXvPTpJNEoS-WANDkWQ',
  authDomain: 'mywebsite-2b5c9.firebaseapp.com',
  projectId: 'mywebsite-2b5c9',
  storageBucket: 'mywebsite-2b5c9.appspot.com',
  messagingSenderId: '1079122521138',
  appId: '1:1079122521138:web:367997085bccb26b7ae02b',
};

const app = initializeApp(firebaseConfig);
export { app };
