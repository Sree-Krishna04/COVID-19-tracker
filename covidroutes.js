const express = require('express');
const router = express.Router();

const CovidData = require('../models/CovidData');
const VaccinationData = require('../models/VaccinationData');
const HospitalResources = require('../models/HospitalResources');

// Endpoint to get COVID cases by region
router.get('/cases', async (req, res) => {
    const region = req.query.region;
    try {
        const data = await CovidData.findOne({ region });
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Data not found for specified region." });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Endpoint to update COVID cases
router.post('/cases/update', async (req, res) => {
    const { region, activeCases, recoveries, deaths } = req.body;
    try {
        const updatedData = await CovidData.findOneAndUpdate(
            { region },
            { activeCases, recoveries, deaths },
            { new: true, upsert: true }
        );
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Endpoint to get vaccination status
router.get('/vaccination-status', async (req, res) => {
    try {
        const data = await VaccinationData.findOne();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Endpoint to get hospital resources by region
router.get('/hospitals/resources', async (req, res) => {
    const region = req.query.region;
    try {
        const data = await HospitalResources.findOne({ region });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Endpoint to update hospital resources
router.post('/hospitals/resources/update', async (req, res) => {
    const { region, beds, ventilators, icuCapacity } = req.body;
    try {
        const updatedData = await HospitalResources.findOneAndUpdate(
            { region },
            { beds, ventilators, icuCapacity },
            { new: true, upsert: true }
        );
        res.json(updatedData);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;
