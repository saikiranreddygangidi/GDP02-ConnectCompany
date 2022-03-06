'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscriptionsSchema extends Schema {
  up () {
    this.create('subscriptions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('subscriptions')
  }
}

module.exports = SubscriptionsSchema
