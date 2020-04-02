import express from 'express'
import cors from 'cors'

class App {
  public app: express.Application;

  public constructor () {
    this.app = express() /* Instância App Express */

    this.middlewares()
    this.routes()
  }

  /* Definindo Middlewares da aplicação */
  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  /* Rotas */
  private routes (): void {
    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })
  }
}

export default new App().app
