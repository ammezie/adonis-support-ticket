'use strict'

const Route = use('Route')

Route.on('/').render('home')

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
*/
Route.get('login', 'UsersController.showLoginPage')
Route.post('login', 'UsersController.login')
Route.get('register', 'UsersController.showRegisterPage')
Route.post('register', 'UsersController.register')
