const mongoose = require('mongoose');

const CovidDataSchema = new mongoose.Schema({
    region: String,
    activeCases: Number,
    recoveries: Number,
    deaths: Number,
});

module.exports = mongoose.model('CovidData', CovidDataSchema);
