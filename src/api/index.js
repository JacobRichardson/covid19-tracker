/** 
 * This module is responsible for interfacing
 * with the API.
 */

// Imports.
import axios from 'axios';
import CountryPicker from '../components/CountryPicker/CountryPicker';

// GLOBALS
const URL = 'https://covid19.mathdro.id/api';

/** 
 * Exported function to fetch data from the api.
 */
export const fetchData = async (country) => {

	// Create the country url.
	let actualURL = URL;

	// If country is defined.
	if (country) {

		// Update the actual URL to include the country.
		actualURL = `${actualURL}/countries/${country}`;
	}


	try {

		// Retrieve the response from the api.
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(actualURL);

		// Return the data in a new object.
		return { confirmed, recovered, deaths, lastUpdate };

	} catch (e) {

		// Print out the error.
		console.log(e);
	}
}

/** 
 * Exported function to fetch daily data.
 */
export const fetchDailyData = async () => {

	try {

		// Retrieve the daily data.
		const { data } = await axios.get(`${URL}/daily`);

		// Map over each element in the data and create an concise object
		// With the information that is actually needed.
		const modifiedData = data.map((dailyData => ({
			confirmed: dailyData.confirmed.total
			, deaths: dailyData.deaths.total
			, date: dailyData.reportDate
		})));

		// Return the modified data.
		return modifiedData;
	}
	catch (e) {

	}
}

/**
 * Exported function to fetch countries.
 */
export const fetchCountries = async () => {

	try {

		// Retrieve the response and only retrieve the countries.
		const { data: { countries } } = await axios.get(`${URL}/countries`);

		// Map over the countries to create an array of just country names.
		return countries.map((country) => country.name);

	}
	catch (e) {

		// Print the error.
		console.log(e);
	}
}