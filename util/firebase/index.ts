import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyB5Nn-4rLT5v805YEKs5LK3z051aDR06gI',
  authDomain: "verification-company.firebaseapp.com",
  projectId: "verification-company",
  storageBucket: "verification-company.appspot.com",
  messagingSenderId: "895333778163",
  appId: '1:895333778163:web:b7e3803a44190de309ed86',
  measurementId: 'G-0YQQ1R74Z2',
};

export const firebaseApp = initializeApp(firebaseConfig);
