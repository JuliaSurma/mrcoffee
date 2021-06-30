const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const mail = document.getElementById('adresseMail')
const form = document.getElementById('form')
const mesToSend = document.getElementById('mesToSend')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
let messages = [];
if (nom.value === '' || nom.value == null) {
messages.push('Le nom est requis')
} else if 
    (prenom.value === '' || prenom.value == null) {
    messages.push('Le nom de famille est requis')
} else if 
    (mail.value === '' || mail.value == null) {
    messages.push('E-mail est requis')
} else if 
    (mesToSend.value === '' || mesToSend.value == null) {
        messages.push('Un message est requis')
}

if (messages.length > 0 ) {
e.preventDefault()
errorElement.innerText = messages.join(', ')
}
}
)

// Get the modal
var modal = document.getElementById("modal");

// // // // Get the button that opens the modal
var btn = document.getElementById("myBtn");

// // // // Get the <span> element that closes the modal
var span = document.getElementsByClassName("closer");

// When the user clicks on the button and every input is fulfilled correctly, open the modal
// function formIsValid () {
//     let messo = []
//  if  (nom.value !== '' || nom.value !== null
// && prenom.value !== '' || prenom.value !== null
//  && mail.value !== '' || mail.value !== null
//  && mesToSend.value !== '' || mesToSend.value !== null) {
// //  modal.style.display = "flex";
// // btn.onclick = function() {
//     modal.style.display = "none";
     
//  } else { 
//     modal.style.display = "flex";

//   }
//  }


// btn.onclick = function formIsValid(){

btn.onclick = function() {
modal.style.display = "flex";
}
   

// // // // When the user clicks on <span> (x), close the modal
span.onclick = function() {
 modal.style.display = "none";
 }

// // // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == modal) 
modal.style.display = "none";
 }


// function formIsValid () 
// let messo = []
// if  (nom.value !== '' || nom.value !== null
// && prenom.value !== '' || prenom.value !== null
//   && mail.value !== '' || mail.value !== null
//  && mesToSend.value !== '' || mesToSend.value !== null) {
//  return modal
//  } else if 
// (messo.push('Error')) {
// }


// btn.onclick = function() {
//     modal.style.display = "flex";
//     }
   





// const openButton = document.querySelectorAll('[data-myBtn]')
// const closeButton = document.querySelectorAll('[data-closing-button]')
// const over = document.getElementById('over')

// openButton.forEach(button => {
// button.addEventListener('click', () => {
// const modal = document.querySelector(button.dataset.myBtn)
// open(modal)

//  })
//  })

// closeButton.forEach(button => {
//  button.addEventListener('click', () => {
//  const modal = button.closest('.modal')
// exit(modal)
    
// })
// })

// over.addEventListener('click', () => {
//    const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//  exit(modal)
//  })
//  })


// function open(modal) {
//  if(modal == null) return
//  modal.classList.add('active')
//  over.classList.add('active')
// }

// function exit(modal) {
// if(modal == null) return
//  modal.classList.remove('active')
//  over.classList.remove('active')
//  }

// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
// // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
// // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                     return false;
//                 } else {
//                 event.preventDefault();
//                 $("#myModal").modal("show");
//               }
//             }, false);
//         });
//     }, false);
// })();

// function validateEmail(mail) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }





