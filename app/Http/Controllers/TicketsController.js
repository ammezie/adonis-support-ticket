'use strict'

const Validator = use('Validator')
const Ticket = use('App/Model/Ticket')
const RandomString = use('randomstring')
const Category = use('App/Model/Category')

class TicketsController {

    /**
     * Show the form for opening a new ticket.
     */
    * create (request, response) {
        const categories = yield Category.pair('id', 'name')

        yield response.sendView('tickets.create', {categories: categories})
    }

    /**
     * Store a newly created ticket in database.
     */
    * store (request, response) {
        // validate form input
        const validation = yield Validator.validateAll(request.all(), {
            title: 'required',
            category: 'required',
            priority: 'required',
            message: 'required'
        })

        // show error messages upon validation fail
        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            return response.redirect('back')
        }

        // persist ticket to database
        const ticket = yield Ticket.create({
            title: request.input('title'),
            user_id: request.currentUser.id,
            ticket_id: RandomString.generate({ length: 10, capitalization: 'uppercase' }),
            category_id: request.input('category'),
            priority: request.input('priority'),
            message: request.input('message'),
            status: "Open",
        })
        // send mail notification
        

        yield request.with({ status: `A ticket with ID: #${ticket.ticket_id} has been opened.` }).flash()
        response.redirect('back')
    }
}

module.exports = TicketsController
