const mongoose = require("mongoose");

//esquema de como uma divida e guardada na DB
const DividaTESScheme = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId, //objeto ID da divida
    //Todos os campos como obrigatórios:
    credor: { type: String, required: true },
    devedor: { type: String, required: true }, //Atenção isto representa um email válido.
    quantia: { type: Number, required: true }, //preciso de ter a certeza que a quantia é um numero
    descricao: { type: String }, //pode ter ou nao uma descricao

    //Super importante é necessário guardar a Data da criação de uma divida de modo a calcular o tempo e a ligação com os emails!
    date: { type: String, required: true },
  },
  {
    versionKey: false, //para tirar a field que aparece sempre com a versão da chave, é desnecessário.
  }
);

module.exports = mongoose.model("DividaTES", DividaTESScheme); //exporto como DividaTES
