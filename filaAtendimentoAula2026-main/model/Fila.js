class Fila {
  #inicio;
  #fim;
  #qtd;
  #elementos;

  constructor(tamanho = 10) {
    this.#inicio = 0;
    this.#fim = -1;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
  }

  isFull() {
    /*if(this.#fim===this.#elementos.length-1)
        return true;
    else
        return false;*/
    return this.#fim === this.#elementos.length - 1;
  }

  isEmpty() {
    return this.#qtd === 0;
  }

  enqueue(elemento) {
    if (!this.isFull()) {
      //if(#fim===#elementos.length - 1) fim =0;
      //else
        this.#fim++;
      this.#elementos[this.#fim] = elemento;
      this.#qtd++;
      console.log(
        `enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      return true;
    }
    return false;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let removido = this.#elementos[this.#inicio];
      //if(#inicio===#elementos.length - 1) inicio=0;
      //else
      this.#inicio++;
      this.#qtd--;
      console.log(`Removido:${removido}`);
      console.log(
        `dequeue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      return removido;
    }
    return null;
  }

  first() {
    if (!this.isEmpty()) return this.#elementos[this.#inicio];
    else return null;
  }
  //last
  toString() {
    let resultado = "";
    for (let i = this.#inicio; i <= this.#fim; i++) {
      resultado += `${this.#elementos[i]} | `;
    }
    return resultado;
  }
}
