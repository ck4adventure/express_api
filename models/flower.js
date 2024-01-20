import mongoose from "mongoose";
import { flowerSchema } from '../schemas/flower.js';
import mongooseLeanVirtuals from "mongoose-lean-virtuals";


export const FlowerSchema = new mongoose.Schema()

FlowerSchema.add(flowerSchema)

FlowerSchema.virtual('color_string').get(function(){
	return this.colors.join("/")
})

FlowerSchema.plugin(mongooseLeanVirtuals);

export const FlowerModel = mongoose.model('flowers', FlowerSchema)
