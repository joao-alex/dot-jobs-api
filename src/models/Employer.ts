import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import {User} from './User'

@Entity('employers')
export class Employer{
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
}
