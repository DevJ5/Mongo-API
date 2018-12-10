const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Programmer schema and model
const ProgrammerSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	price: {
		type: Number
	},
	languages: {
		type: String
	},
	availabe: {
		type: Boolean,
		default: true
	}
});

const Programmer = mongoose.model('programmer', ProgrammerSchema);

module.exports = Programmer;
