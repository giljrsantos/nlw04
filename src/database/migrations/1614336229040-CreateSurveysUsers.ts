import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveysUsers1614336229040 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "surveys_uses",
                columns: [
                    {
                       name: "id",
                       type: "uuid",
                       isPrimary: true                        
                    },
                    {
                       name: "user_id",
                       type: "uuid",                    
                    },
                    {
                       name: "survey_id",
                       type: "uuid",                    
                    },
                    {
                       name: "valeu",
                       type: "number",   
                       isNullable: true                 
                    },
                    { 
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }                    
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKSurvey",
                        referencedTableName: "surveys",
                        referencedColumnNames: ["id"],
                        columnNames: ["survey_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"                        
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys_uses");
    }

}
