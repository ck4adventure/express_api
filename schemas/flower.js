import mongoose from "mongoose";
import { FLOWER_COLORS, FLOWER_SIZES } from '../constants.js';
const types = mongoose.Schema.Types

export const flowerSchema = new mongoose.Schema({
  flower_id: {
    type: types.Number,
    required: true,
  },
  has_thorns: {
    type: types.Boolean,
    required: true,
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
