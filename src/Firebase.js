import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiuFjH5pDZ3bpvBMq6xw1G9u3DNYNgW2k",
  authDomain: "authentication-react-app-73b9f.firebaseapp.com",
  projectId: "authentication-react-app-73b9f",
  storageBucket: "authentication-react-app-73b9f.firebasestorage.app",
  messagingSenderId: "491986702783",
  appId: "1:491986702783:web:00a930f3db894279ce910a"
};

const app = initializeApp(firebaseConfig);
export default app;