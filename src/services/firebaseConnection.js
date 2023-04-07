import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBx5ieEmr-j5HU6G-TSVSfHHDoA9gYcGz0",
    authDomain: "sistema-de-chamados-120a1.firebaseapp.com",
    projectId: "sistema-de-chamados-120a1",
    storageBucket: "sistema-de-chamados-120a1.appspot.com",
    messagingSenderId: "650338912472",
    appId: "1:650338912472:web:1d230b30f870673ab7efad",
    measurementId: "G-HDXMCX171Y"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  export { auth, db, storage }