import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex) {
    await knex.schema.createTable('users', (table)=>{
        table.increments('id').primary();
        table.string('name',45);
        table.string('email', 45).unique();
        table.string('cpf', 15).unique();
        table.string('password', 45);
        table.boolean('type').defaultTo(false);
    });

    await knex('users').insert([
        {
          name: 'admin',
          email: 'admin@email.com',
          cpf: '12345678900',
          password: '1234',
          type: true,
        }
      ]);

}


export async function down(knex: Knex) {
}

