import axios from 'axios';

// fazer validação dos dados antes de enviar ou o sitema vai ficar louco

const CadastroVeiculo = (placaVeiculo, marcaModeeloVeiculo, anoFabricacaoVeiculo, kmAtualVeiculo) => {
  axios.post('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', {
    placa:placaVeiculo,
    marcaModelo: marcaModeeloVeiculo,
    anoFabricacao: anoFabricacaoVeiculo, // enviar dados tipo number, string vai retorna erro
    kmAtual: kmAtualVeiculo // enviar dados tipo number, string vai retorna erro
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export default CadastroVeiculo;

  
