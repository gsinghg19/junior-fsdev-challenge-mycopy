import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEvlr8T6NdrvoVxHnAsdBoezhZKv3cZHs",
  authDomain: "netpremacy-tech-test.firebaseapp.com",
  projectId: "netpremacy-tech-test",
  storageBucket: "netpremacy-tech-test.appspot.com",
  messagingSenderId: "725407766140",
  appId: "1:725407766140:web:5725fa7f4360e062849bf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app };
export { auth };
export { provider };
