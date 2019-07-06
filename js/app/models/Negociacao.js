class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime())
    this._quantidade = quantidade
    this._valor = valor
    //freeze torna o objeto imutável
    Object.freeze(this)
  }
  //métodos acessadores
  get volume() {
    return this._quantidade * this._valor
  }
  get data() {
    //criando um novo objeto a partir do atributo Data
    return new Date(this._data.getTime())
  }
  get quantidade() {
    return this._quantidade
  }
  get valor() {
    return this._valor
  }
}
