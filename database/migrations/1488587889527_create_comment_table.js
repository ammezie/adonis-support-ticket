'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
        table.increments()
        table.integer('ticket_id').unsigned()
        table.integer('user_id').unsigned()
        table.text('comment')
        table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
