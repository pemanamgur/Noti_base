import { initializeApp } from "firebase/app";
import { getAuth   } from "firebase/auth";
import {  getStorage, listAll , ref} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA1lUUGCdz8qMSr8vy1fhpDUe_rWHH4Iv8",
  authDomain: "notify360s.firebaseapp.com",
  projectId: "notify360s",
  storageBucket: "notify360s.appspot.com",
  messagingSenderId: "58744650975",
  appId: "1:58744650975:web:05d32ce7b261b244bf3d6a",
  measurementId: "G-5DTV9R100E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const storage = getStorage();
const liseRef = ref(storage,'images/pema.jpg');

listAll(liseRef)
.then((res)=>{
  res.prefixes.forEach((folderRef)=>{
    console.log(folderRef)
  })
  res.items.forEach((itemsRef)=>{
    console.log(itemsRef);
  })
}).catch((error)=>{
  console.log(error);
})






export {auth }





