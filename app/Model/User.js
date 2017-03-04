'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  /**
   * Define validation rules
   */
  static get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed|min:6'
    }
  }

  /**
   * A user can have many comments
   */
  comments() {
    return this.hasMany('App/Model/Comment')
  }

  /**
   * A user can have many tickets
   */
  tickets() {
    return this.hasMany('App/Model/Ticket')
  }

}

module.exports = User
