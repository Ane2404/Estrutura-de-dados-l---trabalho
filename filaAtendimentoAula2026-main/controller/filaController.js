
const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");
  if (minhaFila.enqueue(novoElemento.value)) {
    mostrarFila(); // mostrar a fila
    novoElemento.value=""; // clear input
    novoElemento.focus();
  } else {
    alert("Fila cheia!");
  }
}

  function mostrarFila(){
    const filaElemento = document.getElementById("lblPessoasFila");
    filaElemento.textContent = minhaFila.toString();
  }

    function removerElemento(){
      let removido = minhaFila.dequeue();
      if(removido===null)
        alert("Fila vazia");
      else{
        alert("Atendido:"+removido);
        mostrarFila();
      }

  }

