import IVeiculo from './Veiculo'

export default class Moto implements IVeiculo {
  modelo: string
  anoFabricacao: number
  qtdePortas = 0
  marca: string
  texto: JSON
  qtdeRodas = 2
  qtdePassageiros: number
}
