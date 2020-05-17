import firebase from '@firebase/app';
import '@firebase/database'; // jika hanya ingin menggunakan firebase database
import config from './firebaseConfig'

firebase.initializeApp(config);
export const rootRef = firebase
    .database()
    .ref();