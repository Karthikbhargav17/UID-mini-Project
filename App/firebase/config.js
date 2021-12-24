import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKP4-6VPiPPhOjt84Ux4lLFnjT1WvHcN4",
  authDomain: "uid-project-98cfd.firebaseapp.com",
  projectId: "uid-project-98cfd",
  storageBucket: "uid-project-98cfd.appspot.com",
  messagingSenderId: "483123264533",
  appId: "1:483123264533:web:6b5e073c823419822ca21c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().enablePersistence();
}
const storageRef = firebase.storage();


export { firebase,storageRef };

