
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Then('Using REST service I get a todo ITEM - GET method', () => {

    cy.request(testdata.jsonplaceholder_url + '/todos/1')
        .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property("userId", 1)
            expect(resp.body).to.have.property("id", 1)
            expect(resp.body).to.have.property("title", "delectus aut autem")
            expect(resp.body).to.have.property("completed", false)

        })
})

Then('Using REST service I add a todo ITEM - POST method', () => {
    cy.request('POST', testdata.jsonplaceholder_url + '/todos', { id: 222, task: 'sample task' })
        .then((resp) => {
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.property("id", 201)
        })
})

Then('Using REST service I delete a todo ITEM - DELETE method', () => {
    cy.request('DELETE', testdata.jsonplaceholder_url + '/todos/100')
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
})

let testdata = {};
before(function () {
    cy.fixture('testdata').then(function (data) {
        testdata.jsonplaceholder_url = data.jsonplaceholder_url;
    })
})


