
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('Using REST service I get a todo ITEM - GET method', () => {
    cy.request('http://localhost:3000/todos/1')
        .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property("userId", 1)
            expect(resp.body).to.have.property("id", 1)
            expect(resp.body).to.have.property("title", "delectus aut autem")
            expect(resp.body).to.have.property("completed", false)

        })
})

Then('Using REST service I add a todo ITEM - POST method',()=> {
    cy.request('POST', 'http://localhost:3000/todos', { id: 222, task: 'sample task' })
        .then((resp) => {
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.property("id", 201)

        })
})

Then('Using REST service I delete a todo ITEM - DELETE method', () => {
    cy.request('DELETE', 'http://localhost:3000/todos/100')
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
})


