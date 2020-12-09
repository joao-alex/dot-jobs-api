// importa um router, que irá criar rotas no nosso servidor
import { Router } from 'express'

// criar o router
const routes = Router()

// cria uma rota acessível por GET
routes.get('/', (request, response) => {
    // retorna uma resposta JSON
    return response.json({ status: 'Server listening' })
})

// exporta o router
export default routes