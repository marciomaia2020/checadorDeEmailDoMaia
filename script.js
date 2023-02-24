
//getting all attribute
const form = document.querySelector("form"),
eInput = form.querySelector(".input"),
text = form.querySelector(".text");

form.addEventListener("submit", (e)=>{
  e.preventDefault(); //impedindo o envio do formulário
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Padrão Regex para validar e-mail
  form.classList.add("error");
  form.classList.remove("valid");
  if(eInput.value == ""){
    text.innerText = "O e-mail não pode ficar em branco";
  }else if (!eInput.value.match(pattern) ) { //se o padrão não corresponder ao valor de entrada do usuário
    text.innerText = "Por favor digite um email válido";
  }else{
    form.classList.replace("error" , "valid"); // substituindo a classe de erro por uma classe válida
    text.innerText = "Este é um e-mail válido";
  }
});
