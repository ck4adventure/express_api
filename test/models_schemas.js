import { expect } from "chai"
describe('flowers schema and model', () => {
  // routes and controllers are 1:1 coupled here
  // routes test
  describe('flower schema', () => {
    describe('flower has a property called name', () => {
      it('name should be unique')
    })
    describe('flower has a property called color', () => {
      it('color is an enum with specific string values')
    })
    describe('flower has a property called size', () => {
      it('size is an enum of string values')
    })
    describe('flower has a property called hasThorns', () => {
      it('hasThorns is a boolean value')
    })
  })
})