import {signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,
    signInWithPopup,
    signOut,} from "firebase/auth";
import {auth} from "../firebaseConfig";

export const LoginApi= (email,password) =>{
    try{
        let res= signInWithEmailAndPassword(auth,email,password)
        return res;
    }
    catch(err)
    {
        return err;
        
    }
}
export const RegisterApi= (email,password) =>{
    try{
        let res= createUserWithEmailAndPassword(auth,email,password)
        return res;
    }
    catch(err)
    {
        return err;
        
    }
}

export const GoogleSignInAPI = () => {
    try {
      let googleProvider = new GoogleAuthProvider();
      let res = signInWithPopup(auth, googleProvider);
      return res;
    } catch (err) {
      return err;
    }
  };

  export const onLogout = () => {
    try {
      signOut(auth);
    } catch (err) {
      return err;
    }
  };