// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV725TGCOpSG1ouhAkpB9pCgl1xRI_xXY",
  authDomain: "collegeguesser.firebaseapp.com",
  databaseURL: "https://collegeguesser-default-rtdb.firebaseio.com",
  projectId: "collegeguesser",
  storageBucket: "collegeguesser.appspot.com",
  messagingSenderId: "1048432852421",
  appId: "1:1048432852421:web:0ff522c7efca425fdbdfac",
  measurementId: "G-H3818S64RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to push data under the "test" node
function pushTestData() {
  const testRef = ref(database, 'test');
  const newTestRef = push(testRef);
  set(newTestRef, {
    exampleField: 'exampleValue',
    // Add more data fields as needed
  }).then(() => {
    console.log('Test data pushed successfully!');
  }).catch((error) => {
    console.error('Error pushing test data:', error);
  });
}

// Call the function to push test data
pushTestData();
