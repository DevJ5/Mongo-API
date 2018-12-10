const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Geolocation schema
const GeoSchema = new Schema({
	type: {
		type: String,
		default: 'point'
	},
	coordinates: {
		type: [Number],
		index: '2dsphere'
	}
});

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
	},
	geometry: GeoSchema
});

const Programmer = mongoose.model('programmer', ProgrammerSchema);

module.exports = Programmer;
