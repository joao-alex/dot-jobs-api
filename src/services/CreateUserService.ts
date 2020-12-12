import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { User } from '../models/User'

// Precisamos criar uma interface para o método saber o que estamos recebendo como parâmetros
interface Request {
    email: string
    name: string
    password: string
    picture: string
    status: string
}

class CreateUserService {
    // temos que dizer que o método é assíncrono para podermos usar o método await.
    // O método retorna uma Promessa de Usuário
    public async execute({ email, name, password, picture, status }: Request): Promise<User> {
        // Pegamos o Repositório do usuário, com ele temos acesso a todas as funções do banco.
        const usersRepository = getRepository(User)

        // procura um usuário com o e-mail passado.
        const checkUserExists = await usersRepository.findOne({
            where: { email },
        })
        
        // Se acharmos um usuário lançamos um erro que será lidado pela função em app.ts
        if (checkUserExists) {
            throw new Error('Email address already used')
        }

        // encripta a senha utilizando uma hash bcrypt 8 vezes
        const encriptedPassword = await hash(password, 8)

        // cria um usuário que pode ser salvo no banco
        const user = usersRepository.create({
            name,
            email,
            password: encriptedPassword,
            picture,
            status
        })

        // salva o usuário criado no banco
        await usersRepository.save(user)

        return user
    }
}

export default CreateUserService