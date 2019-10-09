class DateHelper {

    constructor(){

        throw new Error('DateHelper não pode ser instanciada.')
    }

   static dataParaTexto(data) {
        return data.getDate() + '/' 
        + (negociacao.data.getMonth() + 1) + '/' 
        + negociacao.data.getFullYear()
    }

    static textoParaData(texto) {
        return new Date(...texto.split("-")
            .map((item, indice) => item - (indice % 2)))
    }    
}