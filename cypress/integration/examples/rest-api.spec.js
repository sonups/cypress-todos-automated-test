

describe('verify todos REST API endpoints', () => {
    it('get item', () => {
      cy.request('http://localhost:3000/todos/1')
                .then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.have.property("userId",1)
            expect(resp.body).to.have.property("id",1)
            expect(resp.body).to.have.property("title","delectus aut autem")
            expect(resp.body).to.have.property("completed",false)

          })
    })

    it('adds an item', () => {

        cy.request('POST','http://localhost:3000/todos',{ id: 222, task: 'sample task' })
        .then((resp) => {
            expect(resp.status).to.eq(201)
            expect(resp.body).to.have.property("id",201)

          })
        })

      it('deletes an item', () => {
        cy.request('DELETE', 'http://localhost:3000/todos/100')
        .then((resp) => {
            expect(resp.status).to.eq(200)
          })
        })
})
