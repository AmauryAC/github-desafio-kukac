import { Request, Response } from 'express'

import Validation from '../bin/validation'

class CashierController {
  public getCashChange (req: Request, res: Response): void {
    try {
      let _validationContract = new Validation()

      let purchPrice: number
      let amountPaid: number
      let changeValue: number

      let availableCashNotes = [1, 10, 100]
      let amountByNotes = []

      purchPrice = req.body.purchPrice
      amountPaid = req.body.amountPaid

      _validationContract.isRequired(purchPrice, 'Informe o valor da compra')
      _validationContract.isRequired(amountPaid, 'Informe o valor pago')
      _validationContract.isTrue((purchPrice <= 0) || (amountPaid <= 0), 'Informe valores maiores que 0')
      _validationContract.isTrue(amountPaid > purchPrice, 'O valor pago deve ser maior ou igual ao valor da compra')

      if (!_validationContract.isValid()) {
        res.status(400).send({
          message: 'Existem dados inválidos na sua requisição',
          validation: _validationContract.errors()
        }).end()
        return
      }

      changeValue = amountPaid - purchPrice

      let index = availableCashNotes.length - 1
      let totalNotes = 0

      while (changeValue > 0 && index >= 0) {
        let note = availableCashNotes[index]
        let amount = Math.trunc(changeValue / note)

        totalNotes += amount

        amountByNotes.push({
          note: note,
          amountOfNotes: amount
        })

        changeValue %= note
        index = index - 1
      }

      res.status(200).json({ amountByNotes, totalNotes })
    } catch (error) {
      res.status(500).send({ message: 'Erro no processamento', error: error })
    }
  }
}

export default new CashierController()
