import mongoose from "mongoose";
import { FLOWER_COLORS, FLOWER_SIZES } from "../constants";
const types = mongoose.Schema.Types

export const flowerSchema = new mongoose.Schema({
  name: {
    type: types.String,
    required: true,
	unique: true,
  },
//   size: {
// 	type: types.String,
// 	enum: FLOWER_SIZES,
// 	required: true,
//   },
//   colors: {
//     type: [{
//       type: mongoose.Schema.Types.String,
//       required: true,
//       enum: FLOWER_COLORS,
//     }],
//     required: true,
//     default: undefined
//   }
})
