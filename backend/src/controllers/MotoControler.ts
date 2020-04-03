import { Request, Response } from 'express'

import Moto from '../models/Moto'
import Validation from '../bin/validation'

class MotoController {
  public SalvarDadosVeiculoMoto (req: Request, res: Response): void {
    try {
      let _validationContract = new Validation()

      const veiculoMoto = new Moto()

      veiculoMoto.anoFabricacao = req.body.anoFabricacao
      veiculoMoto.marca = req.body.marca
      veiculoMoto.modelo = req.body.modelo
      veiculoMoto.texto = req.body.texto
      veiculoMoto.qtdePassageiros = req.body.qtdePassageiros

      let anoAtual = new Date().getFullYear()

      _validationContract.isTrue((veiculoMoto.anoFabricacao < 1900) || (veiculoMoto.anoFabricacao > anoAtual), 'O ano de fabricação deve estar entre 1900 e o ano atual')
      _validationContract.isTrue((veiculoMoto.qtdePassageiros < 1) || (veiculoMoto.qtdePassageiros > 2), 'A quantidade de passageiros deve ser 1 ou 2')

      if (!_validationContract.isValid()) {
        res.status(400).send({
          message: 'Existem dados inválidos na sua requisição',
          validation: _validationContract.errors()
        }).end()
        return
      }

      res.status(200).json(veiculoMoto)
    } catch (error) {
      res.status(500).send({ message: 'Erro no processamento', error: error })
    }
  }
}

export default new MotoController()
