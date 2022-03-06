'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscriptionsSchema extends Schema {
  up () {
    this.create('subscriptions', (table) => {
      table.increments().primary().index('id');
      table.integer("userId").unsigned().notNullable();
      table.foreign("userId").references("users.id").onDelete('cascade');
      table.integer("eventId").unsigned().notNullable();
      table.foreign("eventId").references("events.id").onDelete('cascade');
      table.timestamps();
    })
  }

  down () {
    this.drop('subscriptions')
  }
}