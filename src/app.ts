// lib que utilizamos para criar o servidor
import express from 'express'

// importa as rotas do servidor
import routes from './routes/index'

// cria um servidor
const app = express()
// usa as rotas no servidor
app.use(routes)

// segurança para quem faz a requisição
app.disable('x-powered-by')
// permite a gente desserializar o json passado pela requisição em um objeto typescript
app.use(express.json())

// exporta o servidor
export default app