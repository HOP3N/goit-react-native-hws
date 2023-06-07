import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgAtNpZiqufKJ3mT61Q5alE1onHlDyrKq',
  authDomain: 'goit-react-native-8f12a.firebaseapp.com',
  projectId: 'goit-react-native-8f12a',
  storageBucket: 'goit-react-native-8f12a.appspot.com',
  messagingSenderId: '451271538612',
  appId: '1:451271538612:web:c40b3440138e270f474bfb',
  measurementId: 'G-QBFFJRFLP2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();
const storage = firebase.storage();

export { app, auth, db, storage };
