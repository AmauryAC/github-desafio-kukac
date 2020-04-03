import { Request, Response } from 'express'

import Validation from '../bin/validation'

class PalindromeController {
  public getPalindromes (req: Request, res: Response): void {
    try {
      let _validationContract = new Validation()

      let minNumber: number
      let maxNumber: number

      const palindromes = []

      minNumber = Number(req.body.minNumber)
      maxNumber = Number(req.body.maxNumber)

      _validationContract.isRequired(minNumber, 'Informe o menor número do intervalo de números')
      _validationContract.isRequired(maxNumber, 'Informe o maior número do intervalo de números')
      _validationContract.isTrue((minNumber < 10) || (maxNumber < 10), 'Os números devem ser maiores que 10')
      _validationContract.isTrue(minNumber > maxNumber, 'O valor mínimo deve ser menor que o valor máximo')

      if (!_validationContract.isValid()) {
        res.status(400).send({
          message: 'Existem dados inválidos na sua requisição',
          validation: _validationContract.errors()
        }).end()
        return
      }

      for (let num = minNumber; num <= maxNumber; num++) {
        let revNumber = 0
        let auxNum = num

        while (auxNum > 0) {
          revNumber = (revNumber * 10) + (auxNum % 10)
          auxNum = Math.trunc(auxNum / 10)
        }

        if (revNumber == num) {
          palindromes.push(num)
        }
      }

      res.status(200).json({ palindromes })
    } catch (error) {
      res.status(500).send({ message: 'Erro no processamento', error: error })
    }
  }
}

export default new PalindromeController()
