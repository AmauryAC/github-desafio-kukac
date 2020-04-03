import { Request, Response } from 'express'

import Passeio from '../models/Passeio'
import Validation from '../bin/validation'

class PasseioController {
  public SalvarDadosVeiculoPasseio (req: Request, res: Response): void {
    try {
      let _validationContract = new Validation()

      const veiculoPasseio = new Passeio()

      veiculoPasseio.anoFabricacao = req.body.anoFabricacao
      veiculoPasseio.marca = req.body.marca
      veiculoPasseio.modelo = req.body.modelo
      veiculoPasseio.texto = req.body.texto

      let anoAtual = new Date().getFullYear()

      _validationContract.isTrue((veiculoPasseio.anoFabricacao < 1900) || (veiculoPasseio.anoFabricacao > anoAtual), 'O ano de fabricação deve estar entre 1900 e o ano atual')

      if (!_validationContract.isValid()) {
        res.status(400).send({
          message: 'Existem dados inválidos na sua requisição',
          validation: _validationContract.errors()
        }).end()
        return
      }

      res.status(200).json(veiculoPasseio)
    } catch (error) {
      res.status(500).send({ message: 'Erro no processamento', error: error })
    }
  }
}

export default new PasseioController()
