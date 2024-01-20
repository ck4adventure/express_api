import { expect } from "chai";

import { FlowerModel } from '../../models/flower.js'

import fs from 'fs';
import { createRandomFlower } from '../../helpers/flower_helper.js'

describe('flowers schema and model', () => {
  // routes and controllers are 1:1 coupled here
  // routes test
  before(async function () {
    // runs once before the first test in this block
    await FlowerModel.deleteMany()

  })
  describe('flower schema', () => {
    describe('valid flower request', () => {
      it('creates and saves the new item successfully', async () => {
        let err
        try {
          const randomFlower = createRandomFlower("valid")
          const validFlower = new FlowerModel(randomFlower)
          await validFlower.save()
        } catch (error) {
          err = error
        }
        expect(err).to.be.undefined
      })
    })
    describe('flower has a property called name', () => {
      it('errs if name not present', async () => {
        let err
        try {
          const randomFlower = createRandomFlower()
          const newFlower = new FlowerModel(randomFlower)
          newFlower.name = null
          await newFlower.save()
        } catch (error) {
          err = error
        }
        expect(err).to.exist
      })
      it('name must be unique', async () => {
        let err
        try {
          const randomFlower = createRandomFlower("valid")
          const validFlower = new FlowerModel(randomFlower)
          await validFlower.save()
        } catch (error) {
          err = error
        }
        console.log(err)
        expect(err).to.exist
      })
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