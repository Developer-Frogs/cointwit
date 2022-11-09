import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGzbAc_3wE5mu0PcdMCSwAX9Ti1wj4kLo",
  authDomain: "cointwit-db.firebaseapp.com",
  projectId: "cointwit-db",
  storageBucket: "cointwit-db.appspot.com",
  messagingSenderId: "991386598618",
  appId: "1:991386598618:web:df2af64b8a1bdaee9239e3",
  measurementId: "G-3P031B9QB2",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const analytics = () => {
  if (typeof window !== "undefined") {
    return getAnalytics(app);
  } else {
    return null;
  }
};

export { app, auth, analytics, database, storage };
