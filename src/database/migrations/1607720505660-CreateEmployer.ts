import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class CreateEmployer1607720505660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'employers',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                    },                    
                    {
                        name: 'cep',
                        type: 'varchar',
                        isNullable: false                        
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                        isNullable: false                        
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false                        
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employers')
    }

}
