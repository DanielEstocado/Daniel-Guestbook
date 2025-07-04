import { useContext, createContext, useState, useEffect } from "react";
import { 
   GoogleAuthProvider,
   GithubAuthProvider, 
   signInWithPopup,
   onAuthStateChanged, 
   signOut
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const googleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
   }

   const githubSignIn = () => {
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
   }

   const logOut = () => {
      signOut(auth)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         console.log("User state changed:", currentUser);
      })

      return () => {
         unsubscribe();
      }
   }, [])

   return (
      <AuthContext.Provider value={{googleSignIn, githubSignIn, user, logOut}}>
         {children}
      </AuthContext.Provider>
   );
}

export const UserAuth = () => {
   return useContext(AuthContext);
}