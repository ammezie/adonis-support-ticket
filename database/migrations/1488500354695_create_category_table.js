'use strict'

const Schema = use('Schema')

class CategoriesTableSchema extends Schema {

  up () {
    this.create('categories', (table) => {
        table.increments()
        table.string('name')
        table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }

}

module.exports = CategoriesTableSchema
