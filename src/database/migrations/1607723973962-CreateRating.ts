import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class CreateRating1607723973962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ratings',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_from_id',
                        type: 'uuid',
                    },
                    {
                        name: 'user_to_id',
                        type: 'uuid',
                    },
                    {
                        name: 'rate',
                        type: 'real'
                    },
                    {
                        name: 'comment',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ratings')
    }

}
