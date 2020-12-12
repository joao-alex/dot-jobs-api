import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import { User } from '../models/User'

// os ? dizem que os atributos são opcionais
interface Request {
    userId: string
    email?: string
    name?: string
    password?: string
    picture?: string
    status?: string
}

class UpdateUserService {
    public async execute({ userId, email, name, password, picture, status }: Request): Promise<User> {
        // Pegamos o Repositório do usuário, com ele temos acesso a todas as funções do banco.
        const usersRepository = getRepository(User)

        // verifica se existe usuários com o id passado
        const user = await usersRepository.findOne(userId)

        // se não existir lança um erro
        if(!user) {
            throw new Error('User not found with the provided id')
        }

        // verifica se o email já existe
        if(email) {
            const checkUserExists = await usersRepository.findOne({
                where: { email },
            })

            if (checkUserExists) {
                throw new Error('Email address already used')
            }

            user.email = email
        }
        
        // verifica se foi passada os campos
        if(password) {
            password = await hash(password, 8)
            user.password = password
        }

        if(name) {
            user.name = name
        }

        if(picture) {
            user.picture = picture
        }

        if(status) {
            user.status = status
        }

        await usersRepository.save(user)

        return user
    }
}

export default UpdateUserService