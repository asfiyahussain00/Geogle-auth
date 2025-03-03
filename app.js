
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDl-1TEqoD4uW9DQ2EEWVE-mH-vH_e3600",
  authDomain: "geogle-auth.firebaseapp.com",
  projectId: "geogle-auth",
  storageBucket: "geogle-auth.firebasestorage.app",
  messagingSenderId: "645713364476",
  appId: "1:645713364476:web:8799d7aefa77d24f875e79",
  measurementId: "G-KS85QC7GCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


//sign up
document.getElementById('signup-btn')?.addEventListener('click' , () =>{
  const email = document.getElementById('signup-btn').value
  const password = document.getElementById('signup-password').value

  createUserWithEmailAndPassword(auth , email , password)
  .then(()=>{
    alert("Sign Up Successful!");
    window.location.href = "welcome.html";
    })
    .catch((error) => {
    alert(error.message);
    });

  })

  //login 
  document.getElementById('("login-btn"')?.addEventListener('click' , () =>{
    const email = document.getElementById('("login-btn"').value
    const password = document.getElementById('login-password').value
  
    signInWithEmailAndPassword (auth , email , password)
    .then(()=>{
      alert("Sign Up Successful!");
      window.location.href = "welcome.html";
      })
      .catch((error) => {
      alert(error.message);
      });
  
    })

    //geogle
    document.getElementById('google-btn')?.addEventListener('click' , () =>{
      signInWithPopup(auth , provider)
      .then(()=>{
        alert('Login Sucessfully')
        window.location.href ='index.html'
      })
      .catch((error) => {
        alert(error.message);
        });
      
    })


    //logout
    document.getElementById('logout-btn')?.addEventListener('click' , () =>{
      signOut(auth)
      .then(()=>{
        alert('LogOut Sucessfully')
      })
     .catch((error)=>{
      alert(error.message)
     })

    })

   // Show User Email on Welcome Page
onAuthStateChanged(auth, (user) => {
  if (user && window.location.pathname.includes("welcome.html")) {
  document.getElementById("user-email").textContent = user.email;
  } else if (!user && window.location.pathname.includes("welcome.html")) {
  window.location.href = "index.html";
  }
  });