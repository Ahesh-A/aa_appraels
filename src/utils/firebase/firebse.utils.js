import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPyMm66ezyYsWwLWYeB3syIcNxLr_Dxhk",
    authDomain: "a-and-a-appraels.firebaseapp.com",
    projectId: "a-and-a-appraels",
    storageBucket: "a-and-a-appraels.appspot.com",
    messagingSenderId: "748749468636",
    appId: "1:748749468636:web:c06acc27e0d6986e935519"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const cerateUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userAuth);
    
    if(!userSnapShot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new  Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        },{merge : true})
      }catch(error){
        console.log('error creating the user');
      }
    }
    return userDocRef;
  } 

