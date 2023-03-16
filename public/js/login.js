
// Frontend JS for login page, this is loaded via the script tag in the login.handlebars file
const loginFormHandler = async function(event) {
  try { event.preventDefault();
 
   const email = document.querySelector('#email-login');
   const password = document.querySelector('#password-login');
   console.log('Email: ' + email)
 
   console.log('Password: ' + password)
   if (email  && password) {
     const response = await fetch('/api/user/login', {
       method: 'POST',
       body: JSON.stringify({
           email: email.value,
         password: password.value,
       }),
       headers: { 'Content-Type': 'application/json' },
     }).catch(err => console.log(err));
     
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to login');
     };
   };} catch(err) {
     console.log(err)
   }
 }
 
 document
   .querySelector('.form--login')
   .addEventListener('submit', loginFormHandler);
 
   
   const signupFormHandler = async function(event) {
     event.preventDefault();
   
     const email = document.querySelector('#email-signup');
     const password = document.querySelector('#password-signup');
     const username = document.querySelector('#user-signup')
   
     const response = await fetch('/api/user', {
       method: 'POST',
       body: JSON.stringify({
         username: username.value,
            email: email.value,
         password: password.value,
       }),
       headers: { 'Content-Type': 'application/json' },
     });
   
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to sign up');
     }
   };
   
   document
     .querySelector('.form--signup')
     .addEventListener('submit', signupFormHandler);