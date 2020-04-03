import express from 'express'
import cors from 'cors'

/* Importando as rotas da aplicação */
import palindromeRouter from './routes/PalindromeRouter'
import cashierRouter from './routes/CashierRouter'
import passeioRouter from './routes/PasseioRouter'
import motoRouter from './routes/MotoRouter'
import viaCEPRouter from './routes/ViaCEPRouter'

class App {
  public app: express.Application;

  public constructor () {
    this.app = express() // Instância App Express

    this.middlewares()
    this.routes()
  }

  /* Definindo middlewares da aplicação */
  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  /* Configurando as rotas da aplicação */
  private routes (): void {
    this.app.use('/api/palindromes', palindromeRouter)
    this.app.use('/api/cashier', cashierRouter)
    this.app.use('/api/veiculo/passeio', passeioRouter)
    this.app.use('/api/veiculo/moto', motoRouter)
    this.app.use('/api/cep', viaCEPRouter)
  }
}

export default new App().app
