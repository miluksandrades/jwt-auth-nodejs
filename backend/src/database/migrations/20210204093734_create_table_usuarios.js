
exports.up = knex => knex.schema.createTable('usuarios', table =>{
    table.increments('id');
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.string('setor');
})

exports.down = knex => knex.schema.dropTable('usuarios')
