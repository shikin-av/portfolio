import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import clearSpecialSymbols from '../resources/clearSpecialSymbols'

const WorkSchema = new mongoose.Schema({
	nameUrl: {
		type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
	},
	miniature: {
		type: String,
        required: true,
	},
	miniatureHeight: {
		type: Number,
		required: false,
		default: 268,
	},
	headImg: {
		type: String,
        required: true,
	},
	tags: {
		type: String,
        required: true,
	},
	siteUrl: {
		type: String,
        required: false,
	},
	description: {
		type: String,
		required: true,
	},
	content: {
		type: Object,
		required: true,
	},
	sortWeight: {
		type: Number,
		required: false,
		default: 99,
	}
})

WorkSchema.plugin(uniqueValidator)

WorkSchema.pre('save', function(next){
    const work = this
    work.nameUrl = clearSpecialSymbols(work.nameUrl)
    next()
})

export default mongoose.model('Work', WorkSchema)