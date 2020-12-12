import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
import {User} from './User'

@Entity('ratings')
export class Rating {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column()
    cep: string

    @Column()
    user_from_id: string

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_from_id' })
    user_from: User

    @Column()
    user_to_id: string

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_to_id' })
    user_to: User

    @Column()
    rate: number

    @Column()
    comment: string

    @CreateDateColumn()
    created_at: Date
}