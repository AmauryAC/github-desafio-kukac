import IVeiculo from './Veiculo'

export default class Passeio implements IVeiculo {
  modelo: string
  anoFabricacao: number
  qtdePortas = 4
  marca: string
  texto: JSON
}
