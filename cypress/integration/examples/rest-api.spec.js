
let testdata = {};

describe('verify todos REST API endpoints', () => {

  before(function () {
    cy.fixture('testdata').then(function (data) {
      testdata.jsonplaceholder_url = data.jsonplaceholder_url;
    })
  })


  it('get item', () => {
    cy.request(testdata.jsonplaceholder_url + '/todos/1')
      .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property("userId", 1)
        expect(resp.body).to.have.property("id", 1)
        expect(resp.body).to.have.property("title", "delectus aut autem")
        expect(resp.body).to.have.property("completed", false)

      })
  })

  it('adds an item', () => {

    cy.request('POST', testdata.jsonplaceholder_url + '/todos', { id: 222, task: 'sample task' })
      .then((resp) => {
        expect(resp.status).to.eq(201)
        expect(resp.body).to.have.property("id", 201)

      })
  })

  it('deletes an item', () => {
    cy.request('DELETE', testdata.jsonplaceholder_url + '/todos/100')
      .then((resp) => {
        expect(resp.status).to.eq(200)
      })
  })
})
