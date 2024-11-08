const mongoose = require('mongoose');

const HospitalResourcesSchema = new mongoose.Schema({
    region: String,
    beds: Number,
    ventilators: Number,
    icuCapacity: Number,
});

module.exports = mongoose.model('HospitalResources', HospitalResourcesSchema);
