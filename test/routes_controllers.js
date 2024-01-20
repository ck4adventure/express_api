import { app } from '../app.js'
import { expect } from "chai";
import { request } from './test_importer.cjs'

describe('app routes', () => {
  // routes and controllers are 1:1 coupled here
  // routes test
  describe('GET /flowers to query flowers using mongo syntax', () => {
    it('if given no arguments returns 10 random flowers')
  })
  describe('POST /flowers/create is how to create more random flowers', () => {
    it('if given no arguments it creates 3 random flowers', (done) => {
      request(app)
        .post('/flowers/create')
        .end(function (err, res) {
          if (err) done(err);
          expect(res.statusCode).to.eql(200)
          expect(Object.keys(res.body)).to.include("results")
          expect(Object.keys(res.body)).to.include("count")
          expect(Object.keys(res.body)).to.include("names")
          done()
        });
    })
  })
  describe('POST /flowers/share is the custom query route', () => {
    it('should accept json content')
    it('should return json formatted response')
  })
})