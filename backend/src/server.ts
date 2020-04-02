import app from './app'
import variables from './bin/config/variables'

const port = variables.Api.port

app.listen(port, () => {
  console.log(`API inicializada com sucesso na porta ${port}!`)
})
