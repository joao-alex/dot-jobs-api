import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
import {Service} from './Service'
import {Interest} from './Interest'

@Entity('interests')
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    service_id: string

    @OneToOne(() => Service)
    @JoinColumn({ name: 'service_id' })
    service: Service

    @Column()
    interest_id: string

    @OneToOne(() => Interest)
    @JoinColumn({ name: 'interest_id' })
    interest: Interest

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date
}