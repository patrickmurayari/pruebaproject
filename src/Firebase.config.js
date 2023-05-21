
import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBhGqehYglp57Cx9OR_salRldZA2S-jhoQ",
    authDomain: "myawesome-56576.firebaseapp.com",
    projectId: "myawesome-56576",
    storageBucket: "myawesome-56576.appspot.com",
    messagingSenderId: "894887058880",
    appId: "1:894887058880:web:9335c268621d0914c6fc25"
  };


  const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)


  export {app,firestore,storage}