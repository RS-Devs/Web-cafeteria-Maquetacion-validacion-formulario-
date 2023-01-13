
//CODIGO BASE

// // document.getElementById("form").addEventListener("submit", validateForm);

// // function validateForm(event) {
// // event.preventDefault();
// // var isValid = true;

// // var name = document.getElementsByName("name")[0].value;
// // if (name == "" || !/^[a-zA-Z\s]+$/.test(name) || name.length < 5 || name.length > 15) {
// // document.getElementById("errors").innerHTML = "<div style='background-color:red; color:white; padding:5px;'>El Nombre debe contener al menos 5 caracteres y un máximo de 15 caracteres</div>";
// // isValid = false;
// // }

// // var email = document.getElementsByName("email")[0].value;
// // var emailReg = /^\w+([.-]?\w+)*@(gmail|hotmail)+.com$/;
// // if (!emailReg.test(email)) {
// // document.getElementById("errors").innerHTML = "<div style='background-color:red; color:white; padding:5px;'>Email inválido! Debe contener @gmail o @hotmail (sin simbolos)</div>";
// // isValid = false;
// // }

// // var message = document.getElementsByName("message")[0].value;
// // if (message == "" || message.length < 20) {
// // document.getElementById("errors").innerHTML = "<div style='background-color:red; color:white; padding:5px;'>El mensaje es obligatorio y debe tener un mínimo de 20 caracteres</div>";
// // isValid = false;
// // }

// // if (isValid) {
// // document.getElementById("form").submit();
// // }

// // if (!isValid) {
// //     setTimeout(() => {
// //       document.getElementById("errors").innerHTML = "";
// //     }, 4000);
// //   }
  
// // }


//CODIGO REFACTORIZADO

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;
  const errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = "";

  const { name, email, message } = form.elements;
  if (name.value.length < 5 || name.value.length > 15) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>El Nombre debe contener al menos 5 letras y un máximo de 15 letras</div>`;
  }
  if (!/^\w+([.-]?\w+)*@(gmail|hotmail)+(\.com|\.com\.mx)$/.test(email.value)) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>Email inválido! Debe contener @gmail o @hotmail (sin símbolos)</div>`;
  }
  if (message.value.length < 20) {
    isValid = false;
    errorDiv.innerHTML += `<div style='background-color:red; color:white; padding:5px;'>El mensaje es obligatorio y debe tener un mínimo de 20 caracteres</div>`;
  }

  if (isValid) {
    form.submit();
  } else {
    setTimeout(() => {
      errorDiv.innerHTML = "";
    }, 3000);
  }
});
