import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import clearSpecialSymbols from '../resources/clearSpecialSymbols'

const WorkSchema = new mongoose.Schema({
	title: {
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
	}
})

WorkSchema.plugin(uniqueValidator)

WorkSchema.pre('save', function(next){
    const work = this
    work.nameUrl = clearSpecialSymbols(work.nameUrl)
    next()
})

export default mongoose.model('Work', WorkSchema)