
const body = document.getElementById("header")
  const color = ['red','green','yellow','pink','blue','brown','brown','skyblue']
    function fun3(){
        const colorIndex = parseInt(Math.random()*color.length)
        body.style.background = color[colorIndex]
    }

    function validatePassword(password) {
      return password.length >= 6 && password.length <= 12;
    }

    function validateForm() {
      const fullNameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('email');
      const ageInput = document.getElementById('age');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmPassword');
      const passwordError = document.getElementById('passwordError');
      const confirmPasswordError = document.getElementById('confirmPasswordError');

      let flag = false;

      // Validate Password
      if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password length should be between 6 and 12 characters.';
        flag = true;
        // falg= false
      } else {
        passwordError.textContent = '';
      }

      // Validate Confirm Password
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        flag = true;
      } else {
        confirmPasswordError.textContent = '';
      }



      return !flag; // Return the negation of the flag value (false if flag is true, true if flag is false)
    }


 let navbar = document.getElementById("navbar_nav2")
let header = document.getElementById("header")
  
function fun1(){
  navbar.onclick =()=>{
    $("header").slideToggle(2000)
    header.style.width ='100%'
    header.style.paddingLeft='25%'
  } 
}  
fun1() 
function fun2(){
  $("#header").slideUp(1000)
 }