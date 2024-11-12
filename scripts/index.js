 document.addEventListener("DOMContentLoaded", function () {
 
 document.querySelector("#get-touch").addEventListener("click", function () {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var website = document.querySelector('#website').value;
  var textarea = document.querySelector("textarea").value;

  
  if (name && email) {
    
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem('website', website);
    localStorage.setItem("textarea", textarea);

    
    showMessage("Data submitted successfully!", "success");
  } else {
   
    showMessage("Please fill in all required fields.", "error");
  }
});


function showMessage(message, type) {
  const messageElement = document.querySelector("#message");
  messageElement.textContent = message;
  messageElement.className = `popup-message ${type}`;
  messageElement.style.display = "block";

  
  setTimeout(function () {
    messageElement.style.display = "none";
  }, 3000); 
  
}  


});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
  console.log("Hello");
} 
