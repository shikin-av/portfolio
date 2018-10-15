import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import clearSpecialSymbols from '../resources/clearSpecialSymbols'

const WorkSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	content: {
		type: Object,
		required: true,
	},
	nameUrl: {
		type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
	},
	tags: {
		type: Array,
		required: false,
	},
	image: {
		type: String,
        required: true,
	},
	sortWeight: {
		type: Number,
		required: false,
		default: 999,
	}
})

WorkSchema.plugin(uniqueValidator)

WorkSchema.pre('save', function(next){
    const work = this
    work.nameUrl = clearSpecialSymbols(work.nameUrl)
    next()
})

export default mongoose.model('Work', WorkSchema)