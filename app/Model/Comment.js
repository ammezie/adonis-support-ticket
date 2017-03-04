'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {
    
    /**
     * A comment belongs to a particular ticket
     */
    ticket() {
        return this.belongsTo('App/Model/Ticket')
    }

    /**
     * A comment belongs to a user
     */
    user() {
        return this.belongsTo('App/Model/User')
    }
}

module.exports = Comment
