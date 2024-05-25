// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqriNSkfe9UJaTBuaFJiVM_qUJevOfHvI",
  authDomain: "realtyforms99.firebaseapp.com",
  projectId: "realtyforms99",
  storageBucket: "realtyforms99.appspot.com",
  messagingSenderId: "805675563087",
  appId: "1:805675563087:web:4a5290f26f87586daa923a",
  measurementId: "G-XSFPPFRM4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
