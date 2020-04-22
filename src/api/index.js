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