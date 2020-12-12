import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import {Employer} from './Employer'

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    employer_id: string

    @OneToOne(() => Employer)
    @JoinColumn({ name: 'employer_id' })
    employer: Employer

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    localization: string

    @Column()
    conclusion_date: Date
}