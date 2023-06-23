import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig,  } from "./firebase.config"
import { connectAuthEmulator } from "firebase/auth";


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

