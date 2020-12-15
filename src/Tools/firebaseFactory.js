import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPM1eWedCa4l1bvk_XmkzLsW1L91PtrMU",
  authDomain: "guitarstarok.firebaseapp.com",
  projectId: "guitarstarok",
  storageBucket: "guitarstarok.appspot.com",
  messagingSenderId: "567021675107",
  appId: "1:567021675107:web:dd344d006aff2190098e56",
  measurementId: "G-VLL1DLG73V"
};

  const DB = firebase.initializeApp(firebaseConfig);

  export const GetDB = () => firebase.firestore(DB) 