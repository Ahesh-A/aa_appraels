import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
  export const db = getFirestore();

  export const cerateUserDocumentFromAuth = async(userAuth, additionalData = {}) =>{
    if(! userAuth ) return ;

    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapShot = await getDoc(userDocRef);
  
    if(!userSnapShot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new  Date();

      try{
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalData
        },{merge : true})
      }catch(error){
        console.log('error creating the user',error.message);
      }
    }
    return userDocRef;
  } 

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth, email, password );
}

export const signInWithGoogleEmailAndPassword = async( email, password) =>{
  return await signInWithEmailAndPassword(auth, email, password);
}