import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAo0lAVO60aytrWE8f903TkP4uWShqjF-o',
  authDomain: 'weather-app-310907.firebaseapp.com',
  projectId: 'weather-app-310907',
  storageBucket: 'weather-app-310907.appspot.com',
  messagingSenderId: '259108083648',
  appId: '1:259108083648:web:96bdc54ba40cb80bda9a25',
  measurementId: 'G-PQ93TWPXJV',
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
