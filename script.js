// Function to get COVID cases by region
function getCovidCases() {
    const region = document.getElementById('region').value;
    // Simulating an API call
    const result = `Fetching COVID cases for ${region}...<br>Active cases: 1200, Recoveries: 1000, Deaths: 100`;
    document.getElementById('casesResult').innerHTML = result;
}

// Function to update COVID cases for a region
function updateCovidCases() {
    const region = document.getElementById('updateRegion').value;
    const newCases = document.getElementById('newCases').value;
    // Simulating an API call
    const result = `Updated cases for ${region}: New cases reported = ${newCases}`;
    document.getElementById('updateResult').innerHTML = result;
}

// Function to get vaccination status
function getVaccinationStatus() {
    // Simulating an API call
    const result = `Vaccination Status:<br> Doses Given: 500,000 <br> Population Vaccinated: 70%`;
    document.getElementById('vaccinationResult').innerHTML = result;
}

// Function to get hospital resources
function getHospitalResources() {
    // Simulating an API call
    const result = `Hospital Resources Availability:<br>Beds: 50<br>Ventilators: 30<br>ICU Capacity: 80%`;
    document.getElementById('resourcesResult').innerHTML = result;
}

// Function to update hospital resources
function updateHospitalResources() {
    const region = document.getElementById('resourceRegion').value;
    const beds = document.getElementById('beds').value;
    const ventilators = document.getElementById('ventilators').value;
    // Simulating an API call
    const result = `Updated resources for ${region}: Beds = ${beds}, Ventilators = ${ventilators}`;
    document.getElementById('updateResourceResult').innerHTML = result;
}
async function getCovidCases() {
    const region = document.getElementById('region').value;
    try {
        const response = await fetch(`http://localhost:5000/api/covid/cases?region=${region}`);
        const data = await response.json();
        document.getElementById('casesResult').innerHTML = `
            Region: ${region}<br>
            Active cases: ${data.activeCases}<br>
            Recoveries: ${data.recoveries}<br>
            Deaths: ${data.deaths}
        `;
    } catch (error) {
        document.getElementById('casesResult').innerHTML = 'Error fetching data.';
    }
}
