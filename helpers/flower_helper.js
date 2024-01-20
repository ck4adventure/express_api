import { faker } from '@faker-js/faker';

const randomItemFromList = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

export const createRandomFlower = (name) => {
	const n = name || faker.company.buzzAdjective() + ' ' + faker.science.chemicalElement()
	return {
		"name": n,
	}
}