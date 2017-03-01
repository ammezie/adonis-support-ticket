'use strict'

const User = use('App/Model/User')

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
        yield response.sendView('auth.register')
    }

    /**
     * Handle user registration
     */
    * register (request, response) {
        // validate form input
        
        // persist to database
        const user = yield User.create({
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password')
        })

        yield request.auth.login(user)
        response.redirect('/')

        // show flash message
    }
}

module.exports = UsersController
