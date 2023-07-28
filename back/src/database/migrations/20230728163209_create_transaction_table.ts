import { Knex } from "knex";


export async function up(knex: Knex) {

    await knex.schema.createTable('transaction', (table)=>{
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.string('cpf',15);
        table.string('descriptions', 150);
        table.date('date_transaction');
        table.integer('value_points');
        table.integer('value');
        table.string('status');
    });
}


export async function down(knex: Knex): Promise<void> {
}

