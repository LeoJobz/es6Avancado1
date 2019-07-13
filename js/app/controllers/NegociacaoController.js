class NegociacaoController {
  constructor() {
    //mantendo o querySelector associado ao document
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(
      ...this._inputData.value.split("-").map(function(item, indice) {
        //acessando somente o mês
        return item - indice % 2
      })
    );
    console.log(data);

    // console.log(typeof this._inputData.value);

    // console.log(this._inputData.value);

    // let negociacao = new Negociacao(
    //   this._inputData.value,
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // );

    // console.log(negociacao)
  }
}
