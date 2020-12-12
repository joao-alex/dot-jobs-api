import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import {User} from './User'

@Entity('freelancers')
export class Freelancer {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    cep: string

    @Column()
    user_id: string

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @Column()
    address: string

    @Column()
    phone: string

    @Column()
    description: string

    @Column()
    rg: string

    @Column()
    cpf: string

    @Column()
    rg_picture: string

    @Column()
    cpf_picture: string
}
