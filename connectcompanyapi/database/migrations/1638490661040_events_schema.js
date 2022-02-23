'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventsSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments().primary().index('id');
      table.string('eventName', 100).notNullable();
      table.string('eventType').notNullable();
      table.string('eventLocation').notNullable();
      table.integer("belongsTo").unsigned().notNullable();
      table.foreign('belongsTo').references('id').inTable('companies').onDelete('cascade');
      table.integer("createdBy").unsigned().notNullable();
      table.foreign('createdBy').references('id').inTable('users').onDelete('cascade');
      table.date('eventDate').notNullable();
      
      table.timestamps();
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventsSchema
