import { Request, Response } from 'express'
import rp from 'request-promise'

import Validation from '../bin/validation'

class ViaCEPController {
  public getCEPsInfo (req: Request, res: Response): void {
    try {
      let _validationContract = new Validation()

      let CEPs = []
      let dataCEPs = []

      CEPs = req.body.CEPs

      _validationContract.isFixedLen(CEPs, 5, 'Devem ser informados 5 CEPs')

      CEPs.forEach(cep => {
        _validationContract.isFixedLen(cep, 8, 'Os CEPs informados devem ter 8 dígitos')
      })

      if (!_validationContract.isValid()) {
        res.status(400).send({
          message: 'Existem dados inválidos na sua requisição',
          validation: _validationContract.errors()
        }).end()
        return
      }

      let options = {
        method: 'GET',
        uri: 'https://viacep.com.br/',
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true
      }

      CEPs.forEach(async cep => {
        options.uri = `https://viacep.com.br/ws/${cep}/json/`
        rp(options).then(function (result) {
          console.log(result)
          dataCEPs.push(result)
          // res.json(result)
        }).catch(function (err) {
          res.json(err)
        })
      })

      res.status(200).json(dataCEPs)
    } catch (error) {
      res.status(500).send({ message: 'Erro no processamento', error: error })
    }
  }
}

export default new ViaCEPController()
