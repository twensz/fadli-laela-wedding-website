import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1Z2Ko8lFjB3UMXBtZwRzlp1n8jFaFDyE",
  authDomain: "fadli-laela-wedding.firebaseapp.com",
  projectId: "fadli-laela-wedding",
  storageBucket: "fadli-laela-wedding.appspot.com",
  messagingSenderId: "410464544499",
  appId: "1:410464544499:web:a8d7c3900bb675d5253986"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
