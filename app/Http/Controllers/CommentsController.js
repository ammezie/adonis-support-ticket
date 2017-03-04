'use strict'

const Mail = use('Mail')
const Validator = use('Validator')
const Comment = use('App/Model/Comment')

class CommentsController {
    
    /**
     * Persist comment and mail user
     */
    * postComment(request, response) {
        const user = request.currentUser

        // validate form input
        const validation = yield Validator.validateAll(request.all(), {
            comment: 'required'
        })

        // show error messages upon validation fail
        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({ errors: validation.messages() })
                .flash()

            return response.redirect('back')
        }

        // persist comment to database
        const comment = yield Comment.create({
            ticket_id: request.input('ticket_id'),
            user_id: user.id,
            comment: request.input('comment'),
        })

        const commentTicket = yield comment.ticket().fetch()
        const commentUser = yield commentTicket.user().fetch()

        // send mail if the user commenting is not the ticket owner
        if (commentUser.id != user.id) {
            yield Mail.send('emails.ticket_comments', { commentUser, user, commentTicket, comment }, (message) => {
                message.to(commentUser.email, commentUser.username)
                message.from('support@adonissupport.dev')
                message.subject(`RE: ${commentTicket.title} (Ticket ID: ${commentTicket.ticket_id})`)
            })
        }

        yield request.with({ status: 'Your comment has been submitted.' }).flash()
        response.redirect('back')
    }
}

module.exports = CommentsController
