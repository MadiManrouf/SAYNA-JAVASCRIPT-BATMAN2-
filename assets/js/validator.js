window.onload = () => {
  let myForm = document.getElementById("myform");
  myForm.addEventListener("submit", (e) => {
    let email = document.getElementById("email");
    if(email.value == ""){
      e.preventDefault();
      let invalid = document.getElementById("invalid");
      invalid.innerHTML = "Le champs Email ne peut pas être vide";
      invalid.style.color = "red";

    } else {
      e.preventDefault();
      document.getElementById("popupbox").style.display = "block";
    }

    let myBody = document.querySelector("body");
    let box = document.getElementById("popupbox");
    myBody.addEventListener("click", () => {
      if(box.style.display === "block"){
        box.style.display = "none";
      }
    })
    
  })
}