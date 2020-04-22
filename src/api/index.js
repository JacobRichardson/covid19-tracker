/** 
 * This module is responsible for interfacing
 * with the API.
 */

// Imports.
import axios from 'axios';

// GLOBALS
const URL = 'https://covid19.mathdro.id/api';

/** 
 * Exported function to fetch data from the api.
 */
export const fetchData = async () => {

	try {

		// Retrieve the response from the api.
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);

		// Return the data in a new object.
		return { confirmed, recovered, deaths, lastUpdate };

	} catch (e) {

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