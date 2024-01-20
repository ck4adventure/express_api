import { faker } from '@faker-js/faker';

const randomItemFromList = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}

export const createRandomFlower = (name) => {
	const n = name || faker.company.buzzNoun()
	return {
		"name": n,
	}
}