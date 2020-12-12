import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class CreateInterest1607736769758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'interests',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'service_id',
                        type: 'uuid',
                    },
                    {
                        name: 'freelancer_id',
                        type: 'uuid',
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    }                 
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('interests')
    }

}
