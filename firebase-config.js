// Firebase Cloud Configuration for Faheemgraphy Portfolio
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCF-GJNTxjOk68e824YPCFoZagReo6HfxI",
  authDomain: "nexmart-onlineshopping.firebaseapp.com",
  projectId: "nexmart-onlineshopping",
  storageBucket: "nexmart-onlineshopping.firebasestorage.app",
  messagingSenderId: "177356411390",
  appId: "1:177356411390:web:6699e7f1c2a3a277d5f0af"
};

function getFirebaseConfig() {
  try {
    const custom = localStorage.getItem("faheem_custom_firebase");
    if (custom) return JSON.parse(custom);
  } catch(e) {}
  return DEFAULT_FIREBASE_CONFIG;
}

// Initialize Firebase App
let fbApp = null;
let fbDb = null;
let fbStorage = null;

function initFirebase() {
  if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded");
    return null;
  }
  if (!firebase.apps.length) {
    const cfg = getFirebaseConfig();
    fbApp = firebase.initializeApp(cfg);
  } else {
    fbApp = firebase.app();
  }
  fbDb = firebase.firestore();
  try {
    fbStorage = firebase.storage();
  } catch(e) {
    console.warn("Firebase storage not initialized:", e);
  }
  return { app: fbApp, db: fbDb, storage: fbStorage };
}
