const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/*
  ERRO: {
    WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
  }

  A nova versão 5.x não esta usando { useMongoClient: true }, agora esta usando { useNewUrlParser: true, useUnifiedTopology: true }

  OBS: Precisa passar a URL completamente com a PORTA (27017).
*/

mongoose
  .connect('mongodb://localhost:27017/mongo-orm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const PessoaSchema = mongoose.Schema({
      nome: String,
      cargo: String
    })
    const Pessoa = mongoose.model('Pessoa', PessoaSchema)
    const vinicius = new Pessoa({ nome: 'Vinicius Parizoto', cargo: 'Desenvolvedor FullStack' })
    vinicius.save(() => console.log('Salvo'))

    Pessoa.find({}, (err, docs) => console.log(docs))

    Pessoa.remove({  
      _id: '5e43204004152345b4cea481'
    }, (err, res) => console.log(res))
  })