import axios from 'axios';
// fazer validação dos dados antes de enviar ou o sitema vai ficar louco

const CadastroCliente = (name, document, typeDocument, logradouro, numero, cidade, estado, bairro) => {
  axios.post('https://api-deslocamento.herokuapp.com/api/v1/Cliente/', {
    numeroDocumento: document,
    tipoDocumento: typeDocument,
    nome: name,
    logradouro: logradouro,
    numero: numero,
    bairro: bairro,
    cidade: cidade,
    uf: estado,
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export default CadastroCliente;

  
