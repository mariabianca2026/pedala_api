import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaUsusrio1783535037259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
       CREATE TABLE IF EXISTS usuarios(
          id UUID PRIMARY KEY DEFAULT gen_rendom_uuid(),
          nome VARCHAR(150) NOT NULL,
          email VARCHAR(150) UNIQUE NOT NULL,
          telefone VARCHAR(20) NOT NULL,
          dt_criacao TIMESTAMP DEFAUT 'now()'
         ); 
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("usuarios")
    }

}
