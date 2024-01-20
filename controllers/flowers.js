import { FlowerModel } from "../models/flower.js";
import { createRandomFlower } from "../helpers/flower_helper.js";

export function getFlowers(req, res) {
	res.send("hello from get /flowers")
}

export async function createFlowers(req, res, next) {
	try {
		const data = req.body
		let resultsArray = []
		if (data) {
			if (!Array.isArray(data)) {
				data = [data]
			}
			for await (const item of data) {
				const newItem = new FlowerModel(item)
				const result = await newItem.save()
				resultsArray.push(result)
			}
		} else {
			const count = req.query["count"] || 3
			for (let i = 0; i < count; i++) {
				const randomFlower = createRandomFlower()
				console.log(randomFlower)
				const newItem = new FlowerModel(randomFlower)
				const result = await newItem.save()
				resultsArray.push(result)
			}

		}
		const names = resultsArray.map(result => result.base_id)
		res.json({ "count": resultsArray.length, "names": names, "results": resultsArray })
	} catch (error) {
		console.log(error)
		error.statusCode = 400;
		next(error)
	}
}

export function resolveShareQuery(req, res) {
	res.send('Flowers Share Controller')
}