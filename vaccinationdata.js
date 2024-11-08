const mongoose = require('mongoose');

const VaccinationDataSchema = new mongoose.Schema({
    dosesGiven: Number,
    populationVaccinated: Number,
});

module.exports = mongoose.model('VaccinationData', VaccinationDataSchema);
