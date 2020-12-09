// importa o servidor
import app from './app'

// inicia o server iniciando ele para ouvir na porta 3000
app.listen(3000, () => {
    console.log('🌈 listening on 3000')
})