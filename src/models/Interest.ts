import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import {Service} from './Service'
import {Freelancer} from './Freelancer'

@Entity('interests')
export class Interest {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    service_id: string

    @OneToOne(() => Service)
    @JoinColumn({ name: 'service_id' })
    service: Service

    @Column()
    freelancer_id: string

    @OneToOne(() => Freelancer)
    @JoinColumn({ name: 'freelancer_id' })
    freelancer: Freelancer

    @Column()
    status: string
}