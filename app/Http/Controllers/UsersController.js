'use strict'

class UsersController {
    /**
     * Show login page
     */
    * showLoginPage (request, response) {
        yield response.sendView('auth.login')
    }

    /**
     * Handle user authentication
     */
    * login (request, response) {

    }

    /**
     * Show register page
     */
    * showRegisterPage (request, response) {
        yield response.sendView()
    }

    /**
     * Handle user registration
     */
    * register (request, response) {

    }
}

module.exports = UsersController
