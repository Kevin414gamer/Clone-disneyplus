let input = document.getElementsByClassName("caixa-email");
let button = document.getElementsByClassName("btn");
let items = document.getElementsByTagName("input");

function enviar(){

    let items = document.createTextNode(input.value)
    if (input.value === "") {
        alert("Insira um item!")
        return false
      } else {
        button.appendChild(btn);
        input.appendChild(items);     
      }
}

