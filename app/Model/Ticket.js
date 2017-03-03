'use strict'

const Lucid = use('Lucid')

class Ticket extends Lucid {
    
    /**
     * A ticket belongs to a category
     */
    category () {
        return this.belongsTo('App/Model/Category')
    }
}

module.exports = Ticket
