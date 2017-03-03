'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
    
    /**
     * A category can have many tickets
     */
    tickets () {
        return this.hasMany('App/Model/Ticket')
    }
}

module.exports = Category
